import {
  faCodeMerge,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { Fragment } from "react";
import CustomSiteLink from "../customs/CustomSiteLink";

const RecentActivity: NextPage = () => {
  return (
    <div>
      <h3 className="heading mb-4">Recent Activity</h3>
      <div className="space-y-2">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faCodeMerge}
            className="text-[#fff] bg-violetish w-5 h-5 p-2 rounded mr-2"
          />
          <p>
            Merged a pull request in branch <CustomSiteLink>main</CustomSiteLink> of{" "}
            <CustomSiteLink>iOS app development</CustomSiteLink>
          </p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faCodePullRequest}
            className="text-[#fff] bg-green-400 w-5 h-5 p-2 rounded mr-2"
          />
          <p>
            Created a pull request in branch <CustomSiteLink>main</CustomSiteLink> of{" "}
            <CustomSiteLink>iOS app development</CustomSiteLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
