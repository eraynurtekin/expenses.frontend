import axios from 'axios';
import {userAuthenticated} from '../app/authenticationSlice';
export const SignUp = async (dispatch,credentials) => {
  try {
    //api call
    const {data} = await axios.post('https://localhost:44383/api/Authentication/signup',credentials);
    dispatch(userAuthenticated(data));
  } catch (error) {
    console.log('Error');
  }
}

export const SignIn = async (dispatch,credentials) => {
  try {
    //api call
    const {data} = await axios.post('https://localhost:44383/api/Authentication/signin',credentials);
    dispatch(userAuthenticated(data));
  } catch (error) {
    console.log('Error');
  }
}

export const ThirdPartySignIn = async(dispatch,token) => {
  try {
    //api call
    const {data} = await axios.post(`/google?token=${token}`);
    dispatch(userAuthenticated(data));
  } catch (error) {
    console.log('Error');
  }
}