import React from 'react';
import classes from './UsersProfile.module.css';

import {getUserProfile} from "../../api/api";
import ContentContainer from "../Content/ContentContainer";


const UsersProfile = (props) => {
    let userId = props.match.params.userId;

    getUserProfile(userId).then(response => {
            props.ShowUserAC(response.data);
        });
    return(
        <div>
        <div className={classes.content}>
            <div><img src={props.UserProfiles.photos.large}/></div>
        <div className={classes.item}><div><h3>{props.UserProfiles.fullName}    </h3></div>


            <div>{props.UserProfiles.contacts.facebook}</div>
            <div>{props.UserProfiles.contacts.vk}</div>
            <div>{props.UserProfiles.contacts.instagram}</div>
            <div>{props.UserProfiles.contacts.twitter}</div>
            <div>{props.UserProfiles.contacts.github}</div>
            <div>{props.UserProfiles.contacts.youtube}</div>
            <div><hr></hr></div>
            <div>{props.UserProfiles.aboutMe}</div>

    </div>




        </div>
            <ContentContainer/>
        </div>
    )

}

export default UsersProfile;