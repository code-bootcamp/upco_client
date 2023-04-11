import { FormEvent } from "react";

export const wrapAsync =
  <E>(asyncFunc: (event: E) => Promise<void>) =>
  (event: E) => {
    void asyncFunc(event);
  };
export const wrapFileAsync = (asyncFunc: (event: any) => Promise<void>) => () => {
  void asyncFunc(event);
};

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };
