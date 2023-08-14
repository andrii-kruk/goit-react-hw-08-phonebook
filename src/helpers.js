import axios from 'axios';

export const $instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  $instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const resetToken = () => {
  $instance.defaults.headers['Authorization'] = '';
};
