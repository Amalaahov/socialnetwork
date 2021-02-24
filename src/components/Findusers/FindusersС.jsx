import React from 'react';
import classes from './Findusers.module.css';

import userPhoto from '../../assets/image/user_pic.png';
import {NavLink} from "react-router-dom";
import preloader from "../../assets/image/preloader.svg";
import {FollowUser, UnfollowUser} from "../../api/api";




class Findusers extends React.Component{

       
componentDidMount(){

    this.props.getUsersThunk(this.props.currentPage,this.props.pageSize);
}
onPageChanged = (pageNumber) =>
{
    this.props.pageChangeThunk(pageNumber,this.props.pageSize);


}
        render() {
                let pagesCount =Math.ceil ( this.props.totalUsersCount / this.props.pageSize);
             let pages = [];
             for (let i=1; i <= pagesCount; i++)
             {
                     pages.push(i);
             }

               return <>
                   {this.props.isFetching ? <img alt='preloader' src={preloader}/>: null}
                   <div className={classes.item}>

                       {pages.map(p => <span onClick={ () =>{this.onPageChanged(p);}} className={this.props.currentPage === p && classes.selectedPage}>{p} </span>)}
                        {

                        this.props.users.map(u => <div key={u.id}>
                            <div className={classes.userItem}><NavLink to={'users/'+ u.id}>
                               <div> <img alt='ava' src={u.photos.small != null ? u.photos.small: userPhoto} /></div>
                            </NavLink>
                <div>
                    <div><NavLink className={classes.user} to={'users/'+ u.id}>{u.name}</NavLink></div>

                <div>{u.status}</div>
                    <div>111</div>
                </div>


                                {u.followed
                                    ? <button onClick={ () =>  {
                                        UnfollowUser(u.id ).then(response => {
                                                if (response.data.resultCode === 0)
                                                {this.props.unfollow(u.id);}

                                            });}
                                    }>Unfollow</button>
                                    : <button onClick={ () =>  {
                                        FollowUser(u.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0)
                                                {this.props.follow(u.id);}

                                            });}
                                    }>follow</button> }
                        </div>
                            <hr/>
                        </div>)


                                  }
                </div>
                   </>
        }
}


export default Findusers;