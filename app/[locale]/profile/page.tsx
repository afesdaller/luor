import { getMe } from "@/api/services/auth.server";
import ProfileWrapper from "../../../components/profile/ProfileWrapper";

export default function ProfilePage() {
  // const user = await getMe();
  return (
    <>
      <div className="h-1000"></div>
      <ProfileWrapper user={null} />
      <div className="h-1000"></div>
    </>
  );
}
