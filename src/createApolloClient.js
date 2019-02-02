import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';

function createApolloClient({ ssrMode }) {
  const inMemory = new InMemoryCache()
  const cache = ssrMode ? inMemory : inMemory.restore(window.__APOLLO_STATE__)

  return new ApolloClient({
    ssrMode,
    cache,
    link: createHttpLink({
      uri: 'http://localhost:5000',
      credentials: 'same-origin',
      fetch
    })
  });
}

export default createApolloClient;
