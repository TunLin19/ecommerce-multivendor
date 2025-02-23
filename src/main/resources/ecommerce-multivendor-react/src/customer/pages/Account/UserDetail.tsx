import React from "react";
import ProfileFieldCard from "../../../components/ProfileFieldCard";

const UserDetail = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Persional Details
          </h1>
        </div>
        <div className="space-y-5">
          <ProfileFieldCard keys="Name" value="Lin" />
          <ProfileFieldCard keys="Mobile" value="0389359530" />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
