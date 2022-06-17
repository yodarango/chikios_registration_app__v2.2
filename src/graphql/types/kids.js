import { gql } from 'apollo-server-express';

export const kidsTypeDef = gql`
   type Query {
      kid(ID: ID, first_name: String, last_name: String, age: Int): [Kid]
   }

   type Mutation {
      kid(data: KidInput): Kid
   }

   # ---------------- types
   type Kid {
      ID: ID
      first_name: String
      last_name: String
      guardian_first_name: String
      guardian_last_name: String
      second_guardian_first_name: String
      second_guardian_last_name: String
      age: Int
      photo: String
      guardian_phone_number: Int
      created: String
      registration: Registration
      metadata: Metadata
   }

   type Registration {
      checked_in: Boolean
      checked_in_at: String
      checked_out_by: String
      checked_out_at: String
   }

   type Metadata {
      organization: String
   }

   # ---------------- types
   input KidInput {
      first_name: String!
      last_name: String!
      guardian_first_name: String!
      guardian_last_name: String!
      second_guardian_first_name: String
      second_guardian_last_name: String
      age: Int!
      photo: String!
      guardian_phone_number: Int!
   }
`;
