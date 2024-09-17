// useFetchFuelSettings.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

const sid = "04c59c0fcb37d02e7b4cd0602f3b469e"; 
const useFetchFuelSettings = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `https://hst-api.wialon.com/wialon/ajax.html?svc=unit/get_fuel_settings&params=%7B%22itemId%22%3A27058788%7D&sid=${sid}`
        );
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        setError(`Failed to fetch data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

const updateFetchFuelSettings = (
            // Default to current day
) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const updateFuelSettings = (
    winterMonthFrom: number = new Date().getMonth() + 1,
    winterDayFrom: number = new Date().getDate(),
    winterMonthTo: number = new Date().getMonth() + 1,
    winterDayTo: number = new Date().getDate()
  ) => {
    
 
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `https://hst-api.wialon.com/wialon/ajax.html?svc=unit/update_fuel_rates_params&params={"itemId":19790361,"consSummer":10.5,"consWinter":12.0,"winterMonthFrom":${winterMonthFrom},"winterDayFrom":${winterDayFrom},"winterMonthTo":${winterMonthTo},"winterDayTo":${winterDayTo}}&sid=${sid}`
        );
        
      } catch (error) {
        setError(`Failed to update data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  
  };
  
 

  return {error, loading, updateFuelSettings};
};
export default useFetchFuelSettings;
export { updateFetchFuelSettings };