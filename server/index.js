/*
winston을 사용해서 로그를 기록해 보세요.
(https://github.com/winstonjs/winston)
*/
const express = require('express')

const app = express()
const port = 3000
const { ApolloServer, gql } = require('apollo-server-express');
const config = require('./config/db_config.json');
const mysql = require('mysql2/promise');
const pool = mysql.createPool(config);

const execQueryWithParam = async ( query, args ) => {
    let connection ;
    try{ 
        connection = await pool.getConnection();
        const rows = await connection.query(query, args);
        return rows[0];
    } catch ( err ) {
        console.log(err);
        return false;
    } finally {
        if(connection) connection.release();
    }
};

const execQuery = async ( query ) => {
    let connection;
    try{ 
        connection = await pool.getConnection();
        const rows = await connection.query(query);
        return rows[0];
    } catch ( err ) {
        console.log(err);
        return false;
    } finally {
        if(connection) connection.release();
    }
};

const typeDefs = gql`
    type Query {
        users : [UserType]
    }
    type Mutation {
        signUp(id:String, name:String, email:String) : UserType
        login(id:String!, pwd:String!) : UserType
    }
    type UserType {
        id: String
        name: String
        email: String
    }
`

const resolvers = {
    Query: { 
        users : async () => {
            const query = "SELECT id,name,email FROM TB_USER";
            const sendData = await execQuery(query)
            console.log(sendData);
            return sendData;
        }
    },
    Mutation: { 
        login : async (_, params ) => {
            
            let data = [];
            data.push(params["id"]);
            data.push(params["pwd"]);
            let query = "SELECT * FROM TB_USER WHERE ID = ? AND PWD = ?";
            const selectData = await execQueryWithParam(query, data);
            if(!selectData) {
                return '';
            }

            query = "UPDATE TB_USER SET LOGIN_DT = NOW() WHERE ID = ?";
            const updateData = await execQueryWithParam(query, data);
            if(!updateData || updateData.affectedRows <= 0 ) {
                return '';
            }
            return selectData[0];
        },
        signUp : async (_, params) => {
            
            let data = [];
            for(let prop in params ) {
                data.push(params[prop]);
            }
            const query = "INSERT INTO TB_USER(id,name,email) VALUES(?, ?, ?)";
            const resultData = await execQueryWithParam(query, data);
            
            if(resultData.affectedRows > 0) {
                return params;
            }
            return '';
        }
    }
}

//아폴로 서버 생성
const server = new ApolloServer({ typeDefs, resolvers });
const path = '/user';

// app.use(query());
server.applyMiddleware({ app, path });


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`listen check ${port}`);
});
