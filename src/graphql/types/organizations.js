import { gql } from 'apollo-server-express';

export const organizationTypeDef = gql`
   type Query {
      organization(ID: ID, name: String): [Organization]
   }

   type Mutation {
      organization(data: OrganizationInput): Organization
   }

   # ---------------- types
   type Organization {
      ID: ID
      name: String
      admin_email: String
      admin_password: String
      admin_first_name: String
      admin_last_name: String
      other_users: [String]
      settings: String
   }

   #  -------------- inputs
   input OrganizationInput {
      name: String!
      admin_email: String!
      admin_password: String!
      admin_first_name: String!
      admin_last_name: String!
      other_users: [String]
      settings: String
   }
`;
