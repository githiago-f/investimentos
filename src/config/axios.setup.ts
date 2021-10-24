import Axios from 'axios';
import { Urls } from './urls';

export const axios = Axios.create({
  baseURL: Urls.baseUrl
});