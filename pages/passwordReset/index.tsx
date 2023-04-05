import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import PasswordReset from "../../src/components/units/passwordReset/passwordReset.index";

export default function PasswordResetPage(): JSX.Element {
  useAuth();

  return <PasswordReset />;
}
