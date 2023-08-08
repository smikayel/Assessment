import { gql } from 'apollo-server-express';

export default gql `
  type User {
    id: String
    name: String
    role: String
  }

  type Query {
    user(id: ID!): User
    getUser: User
  }

  type Mutation {
    login(email: String!, password: String!): String
    signUp(name: String!, email: String!, password: String!): String
    changePassword(oldPassword: String!, newPassword: String!): String
  }
`