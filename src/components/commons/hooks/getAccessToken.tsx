// import { gql, GraphQLClient } from "graphql-request";

// const RESTORE_ACCESS_TOKEN = gql`
//   mutation {
//     restoreAccessToken
//   }
// `;

// export const getAccessToken = async (): Promise<string | undefined> => {
//   try {
//     const graphQLClient = new GraphQLClient("https://api.upco.space/main", {
//       credentials: "include",
//     });
//     const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
//     const newAccessToken = result; // 이거 수정해야함
//     console.log("새어세스토큰", newAccessToken);
//     return newAccessToken;
//   } catch (error) {
//     if (error instanceof Error) console.log(error.message);
//   }
// };
