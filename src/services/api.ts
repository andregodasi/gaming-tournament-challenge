import axios from 'axios';

const api = axios.create({
  baseURL: 'https://l3-processoseletivo.azurewebsites.net/api',
});

export default api;
