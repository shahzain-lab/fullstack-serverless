import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: '/.netlify/functions/graphql',
        fetch,
    }),
    cache: new InMemoryCache()
})