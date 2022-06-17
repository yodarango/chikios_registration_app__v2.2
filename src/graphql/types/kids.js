import { gql } from "apollo-server";

export const kidsTypteDef = gql`
  type Query {
    kids({data: KidInput}): [Kid]
  }

# ---------------- types 
  type Kid {
    first_name: String;
    last_name: String;
    guardian_first_name: String;
    guardian_last_name: String;
    second_guardian_first_name?: String;
    second_guardian_last_name?: String;
    age: Int;
    photo: String;
    guardian_phone_number: Int;
}

# ---------------- types 
type KidInput {
    first_name: String;
    last_name: String;
    guardian_first_name: String;
    guardian_last_name: String;
    second_guardian_first_name?: String;
    second_guardian_last_name?: String;
    age: Int;
    photo: String;
    guardian_phone_number: Int;
}
`;
