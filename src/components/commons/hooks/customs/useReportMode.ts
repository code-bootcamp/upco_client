import { useMutationReport } from "../mutation/useMutationReport";

export const useReportMode = (): {
  onClickReport: () => Promise<void>;
} => {
  const [reportOpponent] = useMutationReport();

  const onClickReport = async (): Promise<void> => {
    await reportOpponent({
      variables: {
        reportedId: "",
      },
    });
  };

  return {
    onClickReport,
  };
};
