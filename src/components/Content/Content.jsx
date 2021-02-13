import React from 'react';
import classes from './Content.module.css';
import Posts from './Posts/Post';



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
        

       

        <div><textarea  onChange={postChange} ref={newPostElement} value={props.WallData.newTextPost}/></div>
        <div><button onClick={addPost}>ADD POST</button></div>

        <div><Posts  postData={props.WallData.postData}/></div>


          
      </div>
    )
}

export default Content;