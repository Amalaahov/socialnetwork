import React from 'react';
import classes from './Findusers.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/image/user_pic.png';



class Findusers extends React.Component{

       
componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {this.props.setUsers(response.data.items);  this.props.setTotalCount(response.data.totalCount);});
}
onPageChanged = (pageNumber) =>
{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
                this.props.setUsers(response.data.items);
               
         });

}
        render() {
                let pagesCount =Math.ceil ( this.props.totalUsersCount / this.props.pageSize);
             let pages = [];
             for (let i=1; i <= pagesCount; i++)
             {
                     pages.push(i);
             }
               return <div className={classes.item}>
                    
                       {pages.map(p => <span onClick={ () =>{this.onPageChanged(p);}} className={this.props.currentPage === p && classes.selectedPage}>{p} </span>)}
                        {
  
                        this.props.users.map(u => <div key={u.id}>
                            <div><img src={u.photos.small != null ? u.photos.small: userPhoto}></img>
                <div>{u.name}</div>
                
                <div>{u.status}</div>


                {u.followed
                ? <button onClick={ () => {this.props.unfollow(u.id)  } }>Unfollow</button>
                : <button onClick={ () => {this.props.follow(u.id)  } }>Follow</button> }
                        </div>
                        </div>)


                                  }
                </div>
        }
}


export default Findusers;