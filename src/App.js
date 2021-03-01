import React from 'react';
import './App.css';





import Header2 from "./components/header2/Header2";
import Profile from './components/Profile/ProfileContainer.jsx';
import Footer from './components/Footer/Footer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/music/Music';
import Settings from "./components/Settings/Settings";
import ContentContainer from "./components/Content/ContentContainer";
import UsersProfileC from "./components/UsersProfile/UsersProfileC";

import Findusers_container from './components/Findusers/Findusers_container';
import HeaderContainer from "./components/Header/HeaderContainter";
import Login from "./components/LoginPage/Login";











const App = (props) => {


  return (

    <BrowserRouter>
    <div className="App">

      <HeaderContainer />
      <Header2 />
      <Profile />
      <div className='app-wrapper-content'>
    <Route path='/dialogs' render={  () => <DialogsContainer   />}  />
        <Route path='/login' render={  () => <Login   />}  />
    <Route path='/content' render={ () => <ContentContainer />} />
    <Route path='/findusers' render={ () => <Findusers_container />} />
        <Route path='/users/:userId' render={ () => <UsersProfileC />} />
    <Route path='/news' render={  () => <News />} />
    <Route path='/music' render={ () => <Music />} />
        <Route path='/settings' render={  () => <Settings/>} />



    </div>
      <Footer />
      
    </div>
    </BrowserRouter>
  )
}





export default App;
