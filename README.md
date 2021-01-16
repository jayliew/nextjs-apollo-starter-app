# NextJS + Apollo + GraphQL Sample Code

Example includes:

- useQuery
- useLazyQuery
- useMutation

Usage:

```bash
npm install

# then

npm run dev
```


# Live demo

Note: [This demo](https://codesandbox.io/s/little-tree-39ie2) hosted on codesandbox.io may not have the latest code as seen on [the Github repo](https://github.com/jayliew/nextjs-apollo-starter-app). Just in case you see the code demo not functioning correctly, it's probably because I haven't pushed the changes to the demo server.

The GraphQL endpoint can be accessed codesandbox.io, but the demo server must be fired up first by [clicking here](https://codesandbox.io/s/little-tree-39ie2).

Demo GraphQL endpoint: https://msv4f.sse.codesandbox.io/api/graphql-data

Example query:
```
query {
    book {
      name
      author
    }
  }
```

### This example code was initially started by Ben Grunfeld 

- https://medium.com/swlh/server-side-graphql-with-apollo-nextjs-part-1-setup-2615410c4966
- https://medium.com/swlh/full-stack-graphql-with-apollo-nextjs-part-2-1bea637ff007
- https://github.com/bengrunfeld/nextjs-apollo-app
