/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import StockScreen from './src/components/stock';
const Stack = createStackNavigator();
// const client = new ApolloClient({
//   link: createHttpLink({ uri: "http://192.168.0.41:3000/user" }),
//   cache: new InMemoryCache()
// });

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
  return (
    <>
      <ApolloProvider client={apolloClient}>
        {/* <Nav /> */}
        {/* <LoginScreen/> */}
        <StockScreen/>
      </ApolloProvider>
    </>
  );
};

export default App;
