import React from 'react';
import classes from './Content.module.css';
import Posts from './Posts/Post';
import addpostbtn from '../../assets/image/addpostbtn.png';




const Content = (props) => {
    let newPostElement = React.createRef();
    let addPost = () =>
    {

    props.AddPost();
       newPostElement.current.value = 'Новое сообщение';
    }
    let postChange = () =>
    {
let text = newPostElement.current.value;
props.UpdateNewText(text);
        }

    return(
 
    <div className={classes.content}>
        

       

        <div><textarea className={classes.textarea} onChange={postChange} ref={newPostElement} value={props.WallData.newTextPost}/> <img onClick={addPost} src={addpostbtn}/></div>


        <div><Posts  postData={props.WallData.postData}/></div>



          
      </div>
    )
}

export default Content;