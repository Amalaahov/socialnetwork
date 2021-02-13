import React from 'react';
import classes from './Findusers.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/image/user_pic.png';




const Findusers = (props) => {
        if(props.users.length === 0)
        {
                axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
props.setUsers(response.data.items);
                });
        }
return <div className={classes.item}> {
  
        props.users.map(u => <div key={u.id}>
            <div><img src={u.photos.small != null ? u.photos.small: userPhoto}></img>
<div>{u.name}</div>

<div>{u.status}</div>
{u.followed
? <button onClick={ () => {props.unfollow(u.id)  } }>Unfollow</button>
: <button onClick={ () => {props.follow(u.id)  } }>Follow</button> }
        </div>
        </div>)
  
}
</div>

}



export default Findusers;