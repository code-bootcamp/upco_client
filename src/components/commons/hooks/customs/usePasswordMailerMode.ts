import { useMutationPasswordMailer } from "../mutation/useMutationPasswordMailer";

export const usePasswordMailerMode = (): {
  usePasswordMaier: (data: { email: string }) => Promise<void>;
} => {
  const [maier] = useMutationPasswordMailer();

  const usePasswordMaier = async (data: { email: string }): Promise<void> => {
    await maier({
      variables: {
        email: data.email,
      },
    });
  };

  return {
    usePasswordMaier,
  };
};
