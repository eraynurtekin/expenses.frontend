import React from 'react';
import axios from 'axios';
import {setExpenseAmountPerCategory} from '../app/statisticsSlice';

const axiosInterceptorsForRequest = () => {
  axios.interceptors.request.use(config => {
    config.headers = {authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return config;
  });
};


export const getExpensesPerCategory = async(dispatch) => {
  try {
    axiosInterceptorsForRequest();
    const {data} = await axios.get('https://localhost:44383/api/statistics');
    dispatch(setExpenseAmountPerCategory(data));
  } catch (error) {
    console.log(error);
  }
}