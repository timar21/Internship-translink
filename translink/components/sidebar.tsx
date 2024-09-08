"use client";
import React, { useState } from 'react';
import { FaHome, FaUsers, FaFolderOpen, FaCalendarAlt, FaFileAlt, FaChartPie, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <ul className="space-y-2">
        {/* Dashboard */}
        <li>
          <div className="flex items-center p-2 bg-gray-200 rounded-lg">
            <span className="text-gray-600">
                <FaHome  />
            </span>
            
            <span className="ml-3">Dashboard</span>
          </div>
        </li>

        {/* Teams Menu */}
        <li>
          <div
            onClick={() => toggleMenu('teams')}
            className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
                <span  className="text-gray-600">
                <FaUsers />
                </span>
              
              <span className="ml-3">Productivity</span>
            </div>
            {openMenu === 'teams' ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {openMenu === 'teams' && (
            <ul className="ml-8 mt-2 space-y-2">
              <li className="text-gray-600">Mileage (top 10)</li>
              <li className="text-gray-600">Time in trips</li>
              <li className="text-gray-600">Average speed</li>
              <li className="text-gray-600">Stays</li>
            </ul>
          )}
        </li>

        {/* Projects Menu */}
        <li>
          <div
            onClick={() => toggleMenu('projects')}
            className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
                <span className="text-gray-600">
                <FaFolderOpen  />
                </span>
              
              <span className="ml-3">Saftey</span>
            </div>
            {openMenu === 'projects' ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {openMenu === 'projects' && (
            <ul className="ml-8 mt-2 space-y-2">
              <li className="text-gray-600">Geofences</li>
              <li className="text-gray-600">Idling</li>
              
            </ul>
          )}
        </li>

        {/* Reports Menu */}
        <li>
          <div
            onClick={() => toggleMenu('reports')}
            className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
                <span className="text-gray-600">
                <FaChartPie  />
                </span>
              
              <span className="ml-3">Costs</span>
            </div>
            {openMenu === 'reports' ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {openMenu === 'reports' && (
            <ul className="ml-8 mt-2 space-y-2">
              <li className="text-gray-600">Fuel consumption</li>
              <li className="text-gray-600">Mileage (average)</li>
              <li className="text-gray-600">Engine hour</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
