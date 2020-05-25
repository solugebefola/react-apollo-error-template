import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    places: [Place]!
  }

  type Mutation {
    createPlace(id: ID!, location: String!): Place!
  }

  extend type Person {
    favoriteColor: String
  }

  type Place {
    id: ID!
    location: String!
  }
`;

export const resolvers = {
  Place: {
    id: () => 123432,
    location: () => "Infinity, and Beyond"
  },
  Query: {
    places: () => [{ id: "foo", location: "bar" }]
  },
  Mutation: {
    createPlace: (_, { id, location }) => ({ id, location })
  }
}
