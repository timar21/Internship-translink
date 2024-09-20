"use client";
import React from 'react'
import {TotalDistance} from '@/services/report'
const Widget =  () => {
    const {data, error, loading } = TotalDistance();
    
  return (
    <div>
      {data}
    </div>
  )
}

export default Widget
