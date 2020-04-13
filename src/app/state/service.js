// service.js
// all the api calls

import axios from 'axios';
import config from '../config';

export const getBrands = () => {
    return axios.get(`${config.apiEndPoint}/api/brands`)
           .then (response => {
               //returned to caller promise
               // data is list of brand object
               return response.data;
           })
}