import { GET_DATA } from "../constants";
import axios from 'axios';

export const getData = () => {
    const API_KEY = '';
    const URL = 'https://airapi.airly.eu/v1/sensorsWithWios/current?southwestLat=50&southwestLong=19.9&northeastLat=50.09&northeastLong=20.02';
    const data = axios.get(URL, {
        headers: { apikey: API_KEY }
    });

    return {
        type: GET_DATA,
        payload: data,
    }
};