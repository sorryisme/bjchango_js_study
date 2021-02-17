/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Container 
} from 'native-base';


import { ApolloClient, InMemoryCache , gql } from '@apollo/client';
import { createHttpLink } from "apollo-link-http"
import { ApolloProvider } from "@apollo/react-hooks"
import User from './src/components/user/User'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/home/home'
import LoginScreen from './src/components/login/login'
import apolloClient from './src/components/utils/apolloClient'

import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { loginReducer } from './src/components/login/reducer';



const Stack = createStackNavigator();

function Nav(){
  return (
    
    <Container>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title : 'Home'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const App = ({ navigation }) => {
  const logger = createLogger();
  let store = createStore(loginReducer, applyMiddleware(logger));
  console.log(store);
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        {/* <Nav /> */}
        <LoginScreen/>
        {/* <StockScreen/> */}
      </ApolloProvider>
    </Provider>
  );
};

export default App;
