
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TripData {
    n: number;
    i1: number;
    i2: number;
    t1: number;
    t2: number;
    d: number;
    mrk: number;
    c: [string, string, string]; // [trip number, vehicle id, distance]
}

interface LineChartProps {
    data: TripData[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
    
    if (!data) {
        return <div>Loading...</div>; // Show loading state while waiting for data
    }
    console.log(data);

    // Prepare data for the chart
    const chartData = data.map(item => ({
        vehicleId: item.c[1],
        distance: parseFloat(item.c[2]) // Convert the distance string to a number
    }));

    // Aggregate distances by vehicle ID
    const aggregatedData = chartData.reduce((acc: Record<string, number>, curr) => {
        acc[curr.vehicleId] = (acc[curr.vehicleId] || 0) + curr.distance;
        return acc;
    }, {});

    // Convert aggregated data back to an array for the chart
    const finalData = Object.entries(aggregatedData).map(([vehicleId, distance]) => ({
        vehicleId,
        distance
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={finalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="vehicleId" label={{ value: 'Vehicle Identifier', position: 'insideBottomRight', offset: -5 }} />
                <YAxis label={{ value: 'Distance (km)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="distance" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartComponent;