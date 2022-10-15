import { ApolloClient, InMemoryCache } from "@apollo/client";

export function apolloClient(url:string) {
  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache()
  })
}
