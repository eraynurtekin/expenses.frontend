import {createSlice} from '@reduxjs/toolkit';
import React from 'react';

export const statisticsSlice =  createSlice({
  name:'statistics',
  initialState:{
    expenseAmountPerCategory:[],
  },
  reducers:{
    setExpenseAmountPerCategory:(state,action) =>{
      return {...state,expenseAmountPerCategory:[...action.payload]};
    }
  }
})


export const {setExpenseAmountPerCategory} = statisticsSlice.actions;

export default statisticsSlice.reducer;