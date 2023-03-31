import { Dispatch, SetStateAction } from "react";

export interface IJoinUIProps {
  setIsJoin: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
