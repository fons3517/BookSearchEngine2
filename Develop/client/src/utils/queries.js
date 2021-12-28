import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      author
      description
      bookId
      link
      title
    }
  }
`;
