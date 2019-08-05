import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.api_key=aeb5dba1f1913a3c858099a94105e7c3,
  },
});