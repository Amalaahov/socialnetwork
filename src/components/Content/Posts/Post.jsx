import React from 'react';
import classes from './Post.module.css';




const Post = (props) => {

    return(
<div>
    <div className={classes.content}>






        <div className={classes.item}><h3><img  src={props.img}/>{props.name}</h3></div>
        <div >{props.message}</div>
        <div className={classes.item.like}><img width="15" src='https://c0.klipartz.com/pngpicture/540/262/gratis-png-corazon-blanco-redes-sociales-facebook-como-boton-corazon-emoticon-facebook-vivo-amor-thumbnail.png'></img>{props.likesCount}</div>



      </div>
    <br></br>
</div>
    )
}

const Posts = (props) =>{
    let postElement = props.postData.map (p => <Post img={p.img} name={p.name} message={p.message} likesCount={p.likesCount}/>);
    return (
        <div>
        {postElement}
        </div>
    )
}

export default Posts;