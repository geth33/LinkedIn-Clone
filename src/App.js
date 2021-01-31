import React, { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import './App.css';
import { login, logout, selectUser} from "./features/userSlice"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else{
        // use ris logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
      { /* Header */ }
      <Header />

      { !user ? <Login /> :(
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}

    </div>
  );
}

export default App;
