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

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 임시 로컬 방식 로그인
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);
  // const refresh = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   void refresh.toPromise().then((newAccessToken) => {
  //     setAccessToken(newAccessToken ?? "");
  //   });
  // }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (typeof graphQLErrors !== "undefined") {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         return fromPromise(
  //           getAccessToken().then((newAccessToken) => {
  //             setAccessToken(newAccessToken ?? "");

  //             operation.setContext({
  //               headers: {
  //                 ...operation.getContext().headers,
  //                 Authorization: `Bearer ${newAccessToken as string}`,
  //               },
  //             });
  //           })
  //         ).flatMap(() => forward(operation));
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: "https://api.upco.space/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Apollo-Operation-Name": "post",
    },
    credentials: "omit",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
