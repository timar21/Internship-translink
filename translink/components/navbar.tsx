import React from 'react';
import { FaQuestionCircle, FaTh, FaPlus } from 'react-icons/fa';
import { IoPieChartSharp } from 'react-icons/io5';

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-16 py-8 border-b-2 border-blue-500 ">
      <div className="flex items-center">
        <span className="text-orange-500 text-4xl mr-2">
          <IoPieChartSharp />
        </span>
        <h1 className="text-3xl">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-6">
        <span className="text-gray-600 text-lg">
          <FaQuestionCircle />
        </span>
        <span className="text-gray-600 text-lg">
          <FaTh />
        </span>
        <span className="text-gray-600 text-lg">
          <FaPlus />
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
