import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <div>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <ApolloSetting>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
