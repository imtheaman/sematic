import { NextPage } from "next";
import Contributions from "../components/profile/Contributions";
import RecentActivity from "../components/profile/RecentActivity";
import UserHeader from "../components/profile/UserHeader";

const Profile: NextPage = () => {
  return (
    <div className="space-y-10">
      <UserHeader />
      <Contributions />
      <RecentActivity />
    </div>
  );
};

export default Profile;
