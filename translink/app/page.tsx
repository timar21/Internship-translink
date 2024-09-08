import Image from "next/image";
import DateRangeSelector from "@/components/daterange";
import BarChart from "@/components/barchart"; // Import the correct component name
export default function Home() {
  return (
    <div>
      <DateRangeSelector />
      <BarChart/> {/* Use the correct component name */}
    </div>
  );
}
