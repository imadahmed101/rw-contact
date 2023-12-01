export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    comment: String!
    courses: String
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    comment: String!
    courses: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
  }
`
