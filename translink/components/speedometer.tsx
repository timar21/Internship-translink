import React from 'react';
import Speedometer from 'react-d3-speedometer';

interface SpeedometerComponentProps {
  value: number; // Speed value (0 to 100)
  maxValue?: number; // Optional max value
}

const SpeedometerComponent: React.FC<SpeedometerComponentProps> = ({ value, maxValue = 100 }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Max Speed</h2>
      <div className="w-64 h-64">
        <Speedometer
          value={value}
          minValue={0}
          maxValue={maxValue}
          needleColor="#000000"
          startColor="#ff0000"
          segments={10}
          endColor="#00ff00"
          textColor="#000000"
          ringWidth={30}
        />
      </div>
      <p className="mt-4 text-lg">Current Speed: {value} km/h</p>
    </div>
  );
};

export default SpeedometerComponent;