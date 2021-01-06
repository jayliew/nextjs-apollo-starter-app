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

const SET_BOOK_DETAILS = gql`
  mutation UpdateBook($name: String!, $author: String!) {
    updateBook(name: $name, author: $author) {
      name
      author
    }
  }
`;

// const GET_BOOK_BY_AUTHOR = gql`
//   query Book($author: String!) {
//     book(author: $author) {
//       name
//       author
//     }
//   }
// `;

const BookInfo = () => {
  // If loading is false and there is no error, then the Query completed successfully.
  const { loading, error, data } = useQuery(GET_BOOK_DETAILS);

  // example using variables in query
  //const { loading, error, data } = useQuery(GET_BOOK_DETAILS, { variables: { author }, });

  const updateCache = (cache, 
                        { data: { updateBook } } // returned result of the mutation that occurred on the Server.
                      ) => {

    const existingBook = cache.readQuery({
      query: GET_BOOK_DETAILS,
    }); // get existing data first (e.g. could be array)
    
    cache.writeQuery({
      query: GET_BOOK_DETAILS,
      data: { book: updateBook },
    });
  };

  // If you are creating a new entity, deleting an old entity, 
  // or updating multiple entities, you will need to update the cache manually
  // via the 'update' in useMutation()
  const [updateBook, 
          { loading: mutationLoading, 
            error: mutationError }] = useMutation(SET_BOOK_DETAILS, { update: updateCache });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const updateBookDetails = () => {
    // added timestamp to show value is changing
    updateBook({
      variables: { name: ("A Spicy Sausage " + Date.now().toString()) , author: "Anton the Butcher" },
    });
  };

  // @NA look into adding useLazyQuery example

  return (
    <div>
      <p>
        {data.book.name} - {data.book.author}
      </p>
      <button onClick={updateBookDetails}>Update Book</button>
    </div>
  );
};

export default BookInfo;