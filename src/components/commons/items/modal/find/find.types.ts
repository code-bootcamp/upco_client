import { Dispatch, SetStateAction } from "react";

export interface ILoginUIProps {
  onClickClose: () => void;
  onClickMoved: () => void;
  setIsFind: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsJoin: Dispatch<SetStateAction<boolean>>;
}

export interface FormValues {
  email?: string;
}
