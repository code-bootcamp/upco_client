import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const useMutationLogin = () => {
  const [login] = useMutation(LOGIN);

  return [login];
};
