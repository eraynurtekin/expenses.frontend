import {GoogleLogin} from 'react-google-login';
import { ThirdPartySignIn } from '../services/authentication';
import {useDispatch} from 'react-redux';
import React from 'react';

const ThirdPartySignIns = () => {
  const dispatch = useDispatch();
  return <div style={{textAlign:'center',marginTop:'1rem'}}>
    <GoogleLogin 
    clientId="566869731219-kh3f39ott64kvjprl259ugom18rfhrj0.apps.googleusercontent.com"
    onSuccess={r => ThirdPartySignIn(dispatch,r.tokenId)}
    onFailure={e => console.log('Error! ',e)}
    />
  </div>
}

export default ThirdPartySignIns;