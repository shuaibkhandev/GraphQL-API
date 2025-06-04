export const Schema = `#graphql

type User {
  _id:ID!,
  name : String!,
  email : String!,
  password: String!,
  isAdmin: Boolean!,
  createdAt:String!,
  updatedAt:String!
}

type Query {
hello: String,
users : [User]
}
`