import React, { useState } from 'react';
import { Text, Card, CardItem, Content, Body, Input, Item, Label, Button } from 'native-base'; 
import { TextInputMask } from 'react-native';
import { useDispatch } from 'react-redux';
import { useApolloClient } from '@apollo/react-hooks';
import { LOGIN, USERS } from './gql';
import { success, failure } from './actions';

const LoginScreen = () => {
    const [userInfo, setUseInfo] = useState({
        id : '',
        pwd : '',
    });

    const client = useApolloClient();   

    const login = async () => {
        const val = { id : userInfo.id, pwd : userInfo.pwd };
        const resData = await client.mutate({ mutation : LOGIN, variables : val });
        if(resData.data.login.id) {
            console.log(resData.data.login.id);
        }   
    }
    
    const handleInput = (name, text) => {
        setUseInfo({ ...userInfo, [name]: text});
    }

    return (
        <Content>
            <Card>
                <CardItem header>
                    <Text>반장창고 로그인</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Item floatingLabel style={{ marginBottom: 20 }}>
                        <Label>아이디</Label>
                        <Input defaultValue={userInfo.id} onChangeText={(text) => handleInput( "id" , text)} />
                    </Item>
                
                    <Item floatingLabel>
                        <Label>비밀번호</Label>
                        <Input secureTextEntry={true} defaultValue={userInfo.pwd} onChangeText={(text) => handleInput( "pwd" , text)} />
                    </Item>
                    </Body>
                </CardItem>

                <CardItem style={{ justifyContent: 'center' }}>
                    <Button blockon onPress={() => login() }>
                    <Text>로그인</Text>
                    </Button>
                </CardItem>
            </Card>
        </Content>
    );
} 

export default LoginScreen;




