"use client";
import React, { useState } from 'react';
import { FaHome, FaUsers, FaFolderOpen, FaChartPie, FaChevronRight, FaChevronDown } from 'react-icons/fa';

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
          <a href="/" className="flex items-center p-2 bg-gray-200 rounded-lg">
            <span className="text-gray-600">
              <FaHome />
            </span>
            <span className="ml-3">Dashboard</span>
          </a>
        </li>

        {/* productivity Menu */}
        <li>
          <div
            onClick={() => toggleMenu('teams')}
            className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <span className="text-gray-600">
                <FaUsers />
              </span>
              <span className="ml-3">Productivity</span>
            </div>
            {openMenu === 'teams' ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {openMenu === 'teams' && (
            <ul className="ml-8 mt-2 space-y-2">
              <li>
                <a href="/mileage" className="text-gray-600">Mileage (top 10)</a>
              </li>
              <li>
                <a href="/time-in-trips" className="text-gray-600">Time in trips</a>
              </li>
              <li>
                <a href="/average-speed" className="text-gray-600">Average speed</a>
              </li>
              <li>
                <a href="/stays" className="text-gray-600">Stays</a>
              </li>
            </ul>
          )}
        </li>

        {/* Saftey Menu */}
        <li>
          <div
            onClick={() => toggleMenu('projects')}
            className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <span className="text-gray-600">
                <FaFolderOpen />
              </span>
              <span className="ml-3">Safety</span>
            </div>
            {openMenu === 'projects' ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {openMenu === 'projects' && (
            <ul className="ml-8 mt-2 space-y-2">
              <li>
                <a href="/geofences" className="text-gray-600">Geofences</a>
              </li>
              <li>
                <a href="/idling" className="text-gray-600">Idling</a>
              </li>
            </ul>
          )}
        </li>

        {/* Costs Menu */}
        <li>
          <div
            onClick={() => toggleMenu('reports')}
            className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <span className="text-gray-600">
                <FaChartPie />
              </span>
              <span className="ml-3">Costs</span>
            </div>
            {openMenu === 'reports' ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {openMenu === 'reports' && (
            <ul className="ml-8 mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-600">Fuel consumption</a>
              </li>
              <li>
                <a href="/mileage-average" className="text-gray-600">Mileage (average)</a>
              </li>
              <li>
                <a href="/engine-hour" className="text-gray-600">Engine hour</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;