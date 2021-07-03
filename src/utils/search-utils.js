import axios from 'axios';
import { func } from 'prop-types';

const headers = {
  'ovio-api-key': '0f8aa1bc5f818f3abbe2f75600a069b83f90f5794dd2069ae451f11d4c555f38',
  // 8
  'Accept-Language':'nl, nl-NL, nl-BE, en, en-US, en-GB;'
}
const API_URL = "https://api.overheid.io";

// implement timeout here

const fetchVehicleInfo = (vehicle_number)=>{
  return axios.get(`${API_URL}/voertuiggegevens/${vehicle_number}`, {headers: headers});
}

const SearchUtils = {
  fetchVehicleInfo:fetchVehicleInfo
}
export default SearchUtils