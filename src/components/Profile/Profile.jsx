import React, { Component } from 'react';
import './Profile.css';
import state from "../../redux/state";




const Profile = () => {
    return (
        <nav className='profile'>

         <div className='item'><img src={state._state.ProfileInfo[0].avatar}/></div>


        <div> {state._state.ProfileInfo[0].job}</div>
            <div> {state._state.ProfileInfo[0].city}</div>
        <br></br>
        <div>Подписок:</div>
        <div><b>34</b></div>
        <br></br>
          <div>Подписчиков:</div>
        <div><b>155</b></div>
        <br></br>

      </nav>
    )
}

export default Profile;