import Header from "@/components/Header";
import React from "react";
import AccountContent from "./components/AccountContent";

const Account = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-nutral-900">
        <h1 className="text-white text-3xl font-semibold">Account Settings</h1>
      </Header>
      <AccountContent />
    </div>
  );
};

export default Account;
