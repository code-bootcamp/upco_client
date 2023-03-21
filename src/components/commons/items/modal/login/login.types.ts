import { Dispatch, SetStateAction } from "react";

export interface ILoginUIProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface FormValues {
  email?: string;
  password?: string;
}
