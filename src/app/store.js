import { configureStore } from '@reduxjs/toolkit';
import ToastMiddleware from '../middlewares/ToastMiddleware';
import authenticationSlice from './authenticationSlice';
import expensesSlice from './expensesSlice';
import statisticsSlice from './statisticsSlice';
// import expensesReducer from './expensesReducer';

export const store = configureStore({
  reducer: {
    // expensesReducer: expensesReducer,
    expensesSlice:expensesSlice,
    authenticationSlice:authenticationSlice,
    statisticsSlice : statisticsSlice,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});
