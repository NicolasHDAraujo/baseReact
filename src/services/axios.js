import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3002', //url de onde irá usar o axios
})
