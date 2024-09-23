"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SiD3Dotjs } from 'react-icons/si';

const sid = "048d8e71c7ff2e0f47ce6ed980473a4a"; 

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
                setTrip(response.data.reportResult.tables[0].rows); 
            } catch (error) {
                setError(`Failed to fetch data: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     console.log(trip);
    // }, [trip]);

    return { data, error, loading, trip }; 
}



export const Linechartdata = () => {
    const [dat, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    const { data: firstApiData, loading: firstApiLoading, error: firstApiError } = TotalDistance();

    useEffect(() => {
        const fetchData = async () => {
            // Only proceed if the first API call has completed successfully
            if (!firstApiLoading && !firstApiError && firstApiData) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `https://hst-api.wialon.com/wialon/ajax.html?svc=report/get_result_rows&params={"tableIndex":0,"indexFrom":0,"indexTo":200}&sid=${sid}`
                    , { timeout: 10000 });
                    setData(response.data);
                    // console.log("now:" ,response.data);

                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        console.error('Axios error:', error.response?.data);
                    }
                    setError(`Failed to fetch data: ${error}`);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [firstApiData, firstApiLoading, firstApiError]); // Dependency array includes the first API's data and loading state

    // useEffect(() => {
    //     console.log(dat);
    // }, [dat]);

    return {dat, error, loading};
}

export const Speedometer = () => {
    const [da, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { data: firstApiData, loading: firstApiLoading, error: firstApiError } = TotalDistance();
    
    
    useEffect(() => {
        const fetchData = async () => {
            // Only proceed if the first API call has completed successfully
            if (!firstApiLoading && !firstApiError && firstApiData) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `https://hst-api.wialon.com/wialon/ajax.html?svc=report/exec_report&params={"reportResourceId":28589852,"reportTemplateId":2,"reportObjectId":28589960,"reportObjectSecId":28589960,"interval":{"from":1726638160,"to":1726724560,"flags":0}}&sid=${sid}`
                    ,{ timeout: 10000 });
                    setData(response.data.reportResult.tables[0].total[2]);

                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        console.error('Axios error:', error.response?.data);
                    }
                    setError(`Failed to fetch data: ${error}`);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [firstApiData, firstApiLoading, firstApiError]); 

    useEffect(() => {
        console.log(da);
    }, [da]);

    return {da, error, loading};
}