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

export const isOpenState = atom<boolean>({
  key: "isOpenState",
  default: false,
});

export const isCloseState = atom<boolean>({
  key: "isCloseState",
  default: false,
});

export const locationState = atom({
  key: "locationState",
  default: {
    sw: "",
    ne: "",
  },
});

export const interestFilter = atom({
  key: "interestFilter",
  default: "",
});

export const showModalState = atom({
  key: "showModalState",
  default: false,
});

export const isLoginState = atom({
  key: "showLoginState",
  default: false,
});

export const isJoinState = atom({
  key: "showJoinState",
  default: false,
});

export const isFindState = atom({
  key: "showFindState",
  default: false,
});

export const fileUrl = atom({
  key: "fileUrl",
  default: "",
});

export const positionState = atom<GeolocationPosition | null>({
  key: "positionState",
  default: null,
});

export const selectedComponentState = atom({
  key: "selectedComponentState",
  default: "location",
});

export const isFollowerState = atom({
  key: "isFollowerState",
  default: false,
});
