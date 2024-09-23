"use client";

import React from 'react';
import Widget from '@/components/widget'; // Correctly import the 'Widget' component
import LineChartComponent from '@/components/Linechart';
import { Linechartdata } from '@/services/report';
import { TotalDistance } from '@/services/report';
import { HiOutlineLocationMarker, HiOutlineTruck } from 'react-icons/hi';
import { BiTrip } from "react-icons/bi";
import { FaCarOn } from "react-icons/fa6";
import SpeedometerComponent from '@/components/speedometer';
import { Speedometer } from '@/services/report';
import Calendar from '@/components/calendar';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  eachDayOfInterval,
} from 'date-fns';
const page = () => {
    const { dat, error, loading } = Linechartdata();
    const { data, trip } = TotalDistance();
    const { da } = Speedometer();
    const handleDateSelect = (date: Date) => {
      alert(`Selected date: ${format(date, 'yyyy-MM-dd')}`);
  };

    // Function to parse speed value from the response
    const parseSpeed = (speedString: string): number => {
        const match = speedString.match(/(\d+)/); // Extracts the number part
        return match ? parseInt(match[0], 10) : 0; // Converts to number, defaults to 0 if not found
    };

    // Ensure da is a string before parsing
    const speedValue = typeof da === 'string' ? parseSpeed(da) : 0;

    console.log(dat);

    return (
        <div className='flex flex-col gap-10 p-4'>
            <div className='flex gap-24 p-12'>
                <Widget value={data} title="Total" subtitle="distance travelled" icon={<FaCarOn />} />
                <Widget value={trip} title="Total" subtitle="number of trips made" icon={<BiTrip />} />
                
                <Calendar onDateSelect={handleDateSelect} />
            </div>
            <div className=''>
                <div className='max-w-[60%] flex gap-20'>
                    <LineChartComponent data={dat} />
                </div>
                    <SpeedometerComponent value={speedValue} maxValue={200} />
            </div>
        </div>
    );
};

export default page;