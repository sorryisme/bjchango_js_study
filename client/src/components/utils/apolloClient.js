import { ApolloClient, ApolloLink, InMemoryCache, from } from '@apollo/client';
import { createHttpLink } from "apollo-link-http"

const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
};

const apolloClient = new ApolloClient({
    link: createHttpLink({ uri: "http://192.168.0.41:3000/user" }),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
});

export default apolloClient;