import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../stores";
import { getAccessToken } from "../hooks/getAccessToken";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";

export default function ApolloSetting(props): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const refresh = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void refresh.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://api.upco.space/main",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
