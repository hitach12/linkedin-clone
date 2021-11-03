import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import {useSelector} from "react-redux"
import {Login, Logout, selectUser} from "./features/userSlice"
import LoginPage from './Login';
import {auth} from './firebase'
import { useDispatch } from 'react-redux';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect( () => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(Login({
          email : userAuth.email,
          uid : userAuth.uid ,
          displayName: userAuth.displayName,
          photoUrl : userAuth.photoURL
        }))

      } else {
        dispatch(Logout());

      }
    }) 
  } , [dispatch])
  return (
    <div className="App">
      <Header/>

      {!user ? <LoginPage/> :
       (
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
      )}

      
         
    </div>
  );
}

export default App;
