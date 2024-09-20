"use client";
import React from 'react'
import Widget from '@/components/widget' // Correctly import the 'Widget' component
import LineChartComponent from '@/components/Linechart';
import {Linechartdata} from '@/services/report'
import { Line } from 'react-chartjs-2';
const page = () => {
    const {dat, error, loading} = Linechartdata();
    console.log(dat)
  return (
    <div>
      <Widget/> {/* Use the 'Widget' component */}
      <LineChartComponent data={dat}/> Use the 'LineChartComponent' component
    </div>
  )
}

export default page
