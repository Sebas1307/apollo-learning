import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import MainApp from './main'
import { useApolloClientDevTools } from '@dev-plugins/apollo-client'

const client = new ApolloClient({
 uri: 'http://10.2.20.111:4000/',
 cache: new InMemoryCache()
})

export default function App() {
 useApolloClientDevTools(client)
 return (
  <ApolloProvider client={client}>
   <MainApp />
  </ApolloProvider>
 )
}
