import { Dispatch, SetStateAction } from "react";

export interface ILoginUIProps {
  setIsFind: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface FormValues {
  email?: string;
}
