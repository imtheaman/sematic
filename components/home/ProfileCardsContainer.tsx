import { NextPage } from "next";
import ProfileCard from "./ProfileCard";

const ProfileCardsContainer: NextPage = () => {
  return (
    <div className="space-y-5">
      <ProfileCard
        title="Mobile Clients"
        image="/images/user2.jpg"
        totalPoints={72}
        donePoints={59}
        name="Clare"
      />
      <ProfileCard
        title="Backend API"
        image="/images/user2.jpg"
        totalPoints={19}
        donePoints={19}
        name="Jessica"
      />
      <ProfileCard
        title="Admin Panel"
        image="/images/user2.jpg"
        totalPoints={108}
        donePoints={99}
        name="Christopher"
      />
    </div>
  );
};

export default ProfileCardsContainer;
