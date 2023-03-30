import { Dispatch, SetStateAction } from "react";
import { IQuestion } from "../../../commons/types/generated/types";

export interface IPaginationProps {
  data?: IQuestion[][] | undefined;
  setPage: Dispatch<SetStateAction<number>>;
}
