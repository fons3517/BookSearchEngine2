const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  savedBooks: [bookSchema]
}

type bookSchema {
_id: ID
authors: [String]
description: String
bookId: String
link: String
title: String
image: String 
}

type Mutation {

}
`