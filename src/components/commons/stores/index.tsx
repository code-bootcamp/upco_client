import { atom, selector } from "recoil";
import { getAccessToken } from "../hooks/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const roomIdState = atom({
  key: "roomId",
  default: "",
});

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});

export const locationState = atom({
  key: "locationState",
  default: {
    sw: "",
    ne: "",
  },
});
