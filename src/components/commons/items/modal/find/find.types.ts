import { Dispatch, SetStateAction } from "react";

export interface ILoginUIProps {
  onClickClose: () => void;
  onClickMoved: () => void;
}

export interface FormValues {
  email?: string;
}
