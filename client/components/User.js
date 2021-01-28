import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
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

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    }
  });

const GET_USER_INFO = gql`
      query {
        users {
            id
            name
            email
        }
      }
`;

function User() {
    const { loading, error, data } =  useQuery(GET_USER_INFO);
    
    if(loading) return (
        <View style={styles.sectionContainer}>
             <Text style={styles.sectionTitle}>loading</Text>
        </View>
    )

    if(error) return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>error</Text>
        </View>
    )

    return (
        data.users.map( ({ name, id, email }) => (
            <View style={styles.sectionContainer} key={id}>
                <Text style={styles.sectionTitle}>{name}</Text>
                <Text style={styles.sectionDescription}>{email}</Text>
            </View>
        ))
    )
}

export default User;