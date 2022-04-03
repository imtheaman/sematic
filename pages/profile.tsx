import { NextPage } from "next";
import AppWrapper from "../components/AppWrapper";
import MainScreen from "../components/profile/MainScreen";

const Profile: NextPage = () => {
  return (
    <AppWrapper title="Sematic: User's Profile" className="space-y-10">
      <MainScreen />
    </AppWrapper>
  );
};

export default Profile;
