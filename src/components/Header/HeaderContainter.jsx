import React from 'react';


import classes from './Header.module.css';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {Set_User_Data} from "../../redux/reducer/authreducer";


class HeaderContainer extends React.Component{
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        withCredentials: true
    })
        .then(response => {
if (response.data.resultCode === 0)
{

    this.props.Set_User_Data(response.data.data.id,response.data.data.email,response.data.data.login);
}
        });
}

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect (mapStateToProps,{Set_User_Data}) (HeaderContainer);