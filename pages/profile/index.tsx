import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import ProfileUI from "../../src/components/units/profile";

export default function ProfilePage(): JSX.Element {
  useAuth();

  return <ProfileUI />;
}
