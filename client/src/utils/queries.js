import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getMe {
    me {
      username
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

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
