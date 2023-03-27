import {
  DefaultContext,
  gql,
  MutationTuple,
  OperationVariables,
  useMutation,
} from "@apollo/client";

const SAVE_USER_LOCATION = gql`
  mutation saveUserLocation($location: SaveUserLocationInput!) {
    saveUserLocation(location: $location)
  }
`;

export const useMutationLocation = (): MutationTuple<OperationVariables, DefaultContext> => {
  const result = useMutation(SAVE_USER_LOCATION);

  return result;
};
