import React, { Component } from 'react';
import '../pages/index.scss';
import AppNavbar from './appNavBar';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'isomorphic-fetch'

const httpLink = createHttpLink({
    uri: 'http://localhost:8050/api/hashtagCount'
  })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(
        {
            addTypename: false
          }
    )
});


const Layout = (props) => {
    return(
        <ApolloProvider client={client} >
            <AppNavbar />
            {props.children}
        </ApolloProvider>
    )
};

export default Layout;