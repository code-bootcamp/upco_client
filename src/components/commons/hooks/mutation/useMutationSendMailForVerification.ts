import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationSendMailForVerificationArgs,
} from "../../../../commons/types/generated/types";

const SEND_MAIL_FOR_VERIFICATION = gql`
  mutation sendMailForVerification($email: String!) {
    sendMailForVerification(email: $email)
  }
`;

export const useMutationSendMailForVerification = (): typeof result => {
  const result = useMutation<
    Pick<IMutation, "sendMailForVerification">,
    IMutationSendMailForVerificationArgs
  >(SEND_MAIL_FOR_VERIFICATION);

  return result;
};
