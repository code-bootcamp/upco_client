import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import ProfileEditUI from "../../../src/components/units/profileEdit";

export default function ProfileEditPage(): JSX.Element {
  useAuth();

  return <ProfileEditUI />;
}
