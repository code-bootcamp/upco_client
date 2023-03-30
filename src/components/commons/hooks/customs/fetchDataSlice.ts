import { INotice, IQuestion } from "../../../../commons/types/generated/types";

interface IFetchQuestionsSlice {
  data: (IQuestion | INotice)[];
  length: number;
  slice: any;
}

export const FetchDataSlice = (data: IFetchQuestionsSlice) => () => {
  const result: (IQuestion | INotice)[][] = [];

  if (data === undefined) {
    return;
  }
  for (let i = 0; i < data?.length; i = i + 10) {
    result.push(data.slice(i, i + 10));
  }
  return result;
};
