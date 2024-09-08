"use client";
import React from 'react'
// import { Bar } from 'react-chartjs-2'
import { getFuelInfo } from '@/services/fuelfetch'
import { useEffect , useState } from 'react'

const BarChart: React.FC = () => {

    const [recentFuel, setRecentFuel] = useState<any[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );


    useEffect(() => {
        const fetchRecentTransaction = async () => {
          setStatus("loading");
          try {
            const response = await getFuelInfo();
            setRecentFuel(response.data.content);
            setStatus("success");
            console.log(response.data.content);
          } catch (error) {
            console.error("Error fetching the fuel consumption: ", error);
            setStatus("error");
          }
        };
        fetchRecentTransaction();
      }, []);

  return (

    <div>
      
    </div>
  )
}

export default BarChart
