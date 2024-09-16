import Image from "next/image";
import DateRangeSelector from "@/components/daterange";
import BarChart from "@/components/barchart"; // Import the correct component name
export default function Home() {
  return (
    <div>
      <DateRangeSelector />
      
        <div className="flex ">
          <BarChart />
          <BarChart/>
        </div>
        <div className="flex ">
          <BarChart />
          <BarChart/>
        </div>
      
      {/* Use the correct component name */}
    </div>
  );
}
