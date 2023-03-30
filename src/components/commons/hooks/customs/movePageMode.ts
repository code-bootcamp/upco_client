import { useRouter } from "next/router";

export const movePageMode = (): {
  onClickMovePage: (move: string) => () => Promise<void>;
} => {
  const router = useRouter();

  const onClickMovePage = (move: string) => async (): Promise<void> => {
    await router.push(move);
  };

  return { onClickMovePage };
};
