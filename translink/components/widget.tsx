"use client";
import React from 'react'
import {TotalDistance} from '@/services/report'
interface WidgetProps {
  value: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
const Widget: React.FC<WidgetProps> = ({ value, title, subtitle, icon }) => {
    const {data, error, loading } = TotalDistance();
    
  return (
    <div className=''>
      
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-8">
      <div className="text-indigo-700 p-2 text-4xl items-center">
        {icon}
      </div>
      <div className='text-right'>
        <h2 className="text-2xl font-bold text-gray-700">{value}</h2>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
    </div>
  )
}

export default Widget
