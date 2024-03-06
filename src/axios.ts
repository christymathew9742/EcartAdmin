import axios from 'axios';
import Cookies from 'universal-cookie';
import { baseURL } from './url';

export default axios.create({
  baseURL: baseURL,
  timeout: 50000,
  withCredentials: false,
});
