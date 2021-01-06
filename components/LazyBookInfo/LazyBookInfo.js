import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_BOOK_DETAILS = gql`
  query {
    book {
      name
      author
    }
  }
`;

const LazyBookInfo = () => {
  // If loading is false and there is no error, then the Query completed successfully.
  const [getBook, { loading, data, error }] = useLazyQuery(GET_BOOK_DETAILS);

  if (loading) return <p>Loading (useLazyQuery)...</p>;
  if (error) return <p>Error (useLazyQuery)</p>;

  return (
    <div>
      <br /><br /><br />
      <strong>useLazyQuery example</strong>
      <br />
      <br />
    
      <em>book name</em>: {data && data.book.name}
      <br /><br />
      <em>book author</em>: {data && data.book.author}

      <br /><br />

      <button onClick={() => getBook({ variables: { breed: 'bulldog' } })}>
        Click to fill out fields above on-demand
      </button>
    </div>
  );
};

export default LazyBookInfo;