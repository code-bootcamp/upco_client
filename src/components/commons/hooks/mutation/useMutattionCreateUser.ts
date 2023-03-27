import { ApolloCache, DefaultContext, gql, MutationTuple, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUserArgs } from "../../../../commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const useMutationCreateUser = (): MutationTuple<
  Pick<IMutation, "createUser">,
  IMutationCreateUserArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(CREATE_USER);

  return result;
};
