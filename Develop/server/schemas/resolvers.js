const { Apollo } =require('apollo-server');
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    books: async () => {
      return
    }
  }
}