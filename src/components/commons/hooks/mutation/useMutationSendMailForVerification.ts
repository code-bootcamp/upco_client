import { gql, useMutation } from "@apollo/client";

const SEND_MAIL_FOR_VERIFICATION = gql`
  mutation sendMailForVerification($email: String!) {
    sendMailForVerification(email: $email)
  }
`;

export const useMutationSendMailForVerification = () => {
  const result = useMutation(SEND_MAIL_FOR_VERIFICATION);

  return result;
};
