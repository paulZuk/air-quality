import { GET_DATA, GET_DETAIL_DATA } from "../constants";
import axios from 'axios';

const API_KEY = '41b751c38eb743abace405e09137a052';

export const getData = () => {
    const URL = 'https://airapi.airly.eu/v1/sensorsWithWios/current?southwestLat=50&southwestLong=19.9&northeastLat=50.09&northeastLong=20.02';
    const data = axios.get(URL, {
        headers: {
            apikey: API_KEY
        }
    });

    return {
        type: GET_DATA,
        payload: data,
    }
};

export const getDetailData = (id) => {
    const URL = `https://airapi.airly.eu/v1/sensor/measurements?sensorId=${id}`;
    const data = axios.get(URL, {
        headers: {
            apikey: API_KEY
        }
    });

    return {
        type:GET_DETAIL_DATA,
        payload: data
    }
};