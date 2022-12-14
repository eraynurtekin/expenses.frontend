import { Nav,Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../app/authenticationSlice";
import { NavLink } from "react-router-dom";
import React from "react";
const Navbar = () => {
  const {isLoggedIn} = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();

  return <Nav className='navbar' style={{backgroundColor:'#e4fff2'}}>
      <h1 style={{fontFamily:'Brush Script Mt, cursive'}}>My Expenses</h1>
      {
        isLoggedIn
        ?
        <div style={{display:'flex',alignItems:'center'}}>
          <NavLink style={{marginLeft:'1rem'}} variant='link' to='/'>Home</NavLink>
          <NavLink style={{marginLeft:'1rem'}} variant='link' to='/statistics'>Statistics</NavLink>
          <Button variant='link' href='/signin' onClick={() => dispatch(logout())}>Log out</Button>
        </div> 
       
        : <div style={{display:'flex'}}>
          <NavLink to ='/signup'>Sign Up</NavLink>
          <NavLink to ='/signin' style={{marginLeft:'1rem'}}>Sign In</NavLink>
        </div>
      }
  </Nav>
}

export default Navbar;