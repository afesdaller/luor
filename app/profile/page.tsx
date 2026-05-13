import { getMe } from "@/api/services/auth.server";
import ProfileWrapper from "./ProfileWrapper";

export default function ProfilePage() {
  // const user = await getMe();
  return <ProfileWrapper user={null} />;
}
