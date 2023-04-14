import { useMutation, gql } from "@apollo/client";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export const useMutationUploadFile = (): typeof result => {
  const result = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);
  return result;
};
