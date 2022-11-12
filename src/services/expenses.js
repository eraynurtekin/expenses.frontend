// import { ActionCreators } from '../app/expensesReducer';
import { setExpenses,newExpense,editExpense,deleteExpense,setExpensesError,newExpensesError,editExpensesError,deleteExpensesError } from '../app/expensesSlice';
import axios from 'axios'

const axiosInterceptorsForRequest = () => {
  axios.interceptors.request.use(config => {
    config.headers = {authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return config;
  });
};

export const GetExpenses = async (dispatch) => {
  
  try {
    //api call
    axiosInterceptorsForRequest();
    const {data} = await axios.get('https://localhost:44383/api/Expenses');
     dispatch(setExpenses(data));
  } catch (error){
    dispatch(setExpensesError);
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    //api call
    axiosInterceptorsForRequest();
    const {data} = await axios.post('https://localhost:44383/api/Expenses',expense);
    dispatch(
      newExpense(data)
    );
  } catch {
    dispatch(newExpensesError());
  }
};


export const EditExpense = async (dispatch,expense) => {
  try {
    //api call
    axiosInterceptorsForRequest();
   await axios.put('https://localhost:44383/api/Expenses',expense);
    dispatch(editExpense(expense));
  } catch {
    dispatch(editExpensesError());
  }
}

export const DeleteExpense = async(dispatch,expense) => {
  try {
    //api call
    axiosInterceptorsForRequest();
    await axios.delete('https://localhost:44383/api/Expenses',{data:{...expense}});
    dispatch(deleteExpense(expense));
  } catch  {
    dispatch(deleteExpensesError());
  }
}