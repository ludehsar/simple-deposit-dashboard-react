import React from "react";

import { Main, Sidebar } from "../../components";

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
