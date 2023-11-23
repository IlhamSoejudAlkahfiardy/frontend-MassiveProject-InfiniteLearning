import React from 'react';
import { useState } from 'react';
import Sidebar from '../../components/User/Sidebar';
import Layout from '../Layout';
import Biodata from '../../components/User/Dashboard/Biodata';
import BasicInformation from '../../components/User/Dashboard/BasicInformation';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  // console.log(showSidebar);

  return (
    <Layout>
      <div className="flex relative bg-gray-200 h-full">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* updatebusiness */}
        <BasicInformation />
      </div>
    </Layout>
  );
};

export default Dashboard;