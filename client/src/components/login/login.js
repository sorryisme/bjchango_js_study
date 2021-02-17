import React, { useState } from 'react';
import { Text, Card, CardItem, Content, Body, Input, Item, Label, Button } from 'native-base'; 
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useApolloClient } from '@apollo/react-hooks';
import { LOGIN } from './gql';
import { success, failure } from './actions';

const LoginScreen = () => {
    const [userInfo, setUseInfo] = useState({
        id : '',
        pwd : '',
    });

    const client = useApolloClient();   

   
    const dispatch = useDispatch();


    const login = async () => {
        try {
            let resultMessage = {};
            const val = { id : userInfo.id, pwd : userInfo.pwd };
            const resData = await client.mutate({ mutation : LOGIN, variables : val });
            console.log(resData);
            if(resData.data.login.id) {
                resultMessage.title = '로그인 결과'
                resultMessage.content = '로그인 성공'
                dispatch(success(resData.data.login));
            } else {
                resultMessage.title = '로그인 결과'
                resultMessage.content = '로그인 실패'
                dispatch(failure());
            }   
            Alert.alert(resultMessage.title, resultMessage.content);
        } catch ( e ) { console.log(e); dispatch(failure());}
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
                    <Button onPress={() => login() }>
                    <Text>로그인</Text>
                    </Button>
                </CardItem>
            </Card>
        </Content>
    );
} 

export default LoginScreen;




