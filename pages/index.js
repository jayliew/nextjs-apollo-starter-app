import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { BookInfo } from "../components/BookInfo";
import { LazyBookInfo } from "../components/LazyBookInfo";

const Home = ({ data }) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql-data",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App Example</h1>
        <BookInfo />
        <LazyBookInfo />
      </div>
    </ApolloProvider>
  );
};

export default Home;