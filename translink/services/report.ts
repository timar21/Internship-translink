"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const sid = "043d86849f78cc7e71a8eba9b46b400c"; 

export const TotalDistance = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [trip, setTrip] = useState<any>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://hst-api.wialon.com/wialon/ajax.html?svc=report/exec_report&params={"reportResourceId":28589852,"reportTemplateId":1,"reportObjectId":28589960,"reportObjectSecId":28589960,"reportObjectIdList":[27255747,27256656,27256879,27255796],"interval":{"from":1726638160,"to":1726724560,"flags":0}}&sid=${sid}`
                );

                setData(response.data.reportResult.tables[0].total[2]);
                setTrip(response.data.reportResult.tables[0].rows); // Ensure this is correct
            } catch (error) {
                setError(`Failed to fetch data: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
    // Log trip state whenever it changes
    useEffect(() => {
        console.log(trip);
    }, [trip]);

    // Log the total distance
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    return { data, error, loading, trip }; // Return trip for further use if needed
}



export const Linechartdata = () => {
    const [dat, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://hst-api.wialon.com/wialon/ajax.html?svc=report/get_result_rows&params={"tableIndex":0,"indexFrom":0,"indexTo":200}&sid=${sid}`
                ,{ timeout: 10000 });
                // console.log("response:",response.data);
                setData(response.data);
                
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error('Axios error:', error.response?.data);
                }
                setError(`Failed to fetch data: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // console.log(dat);
    }, [dat]);

    return {dat, error, loading}; // Return trip for further use if needed
}

