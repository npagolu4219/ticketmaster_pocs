import React, { Component } from 'react';

import '../pages/index.scss';
import AppNavbar from './appNavBar';
// import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';

// import { HttpLink } from 'apollo-link-http';
import 'isomorphic-fetch'

// Instantiate required constructor fields
// const cache = new InMemoryCache();
// const link = new HttpLink({
//     uri: 'http://10.6.19.70:3000/api/hashtagCount',
// });

// const client = new ApolloClient({
//     // Provide required constructor fields
//     cache: cache,
//     link: link
// });

// import ApolloClient from 'apollo-boost';

const httpLink = createHttpLink({
    uri: 'http://10.6.19.53:3000/api/hashtagCount'
  })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});


const Layout = (props) => (

    <ApolloProvider client={client} >
        <AppNavbar />
        {props.children}
    </ApolloProvider>
);

// serviceWorker.unregister();

export default Layout;