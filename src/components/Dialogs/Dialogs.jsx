import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink, Redirect} from 'react-router-dom';




const DialogItem = (props) => {


    return (
        <div><NavLink className={classes.item} activeClassName={classes.active}
                      to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (

        <div> {props.message} </div>


    )
}


const Dialogs = (props) => {
    let NewMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let NewMessageText = NewMessageElement;
    let UpdateMessageText = () => {
        let text = NewMessageText.current.value;
       props.UpdateMessageText(text);
    }

    let messageElement = props.MessengerData.MessageData.map(m => <Message message={m.message}/>);
    let dialogElement = props.MessengerData.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div><textarea className={classes.textarea} value={props.MessengerData.NewMessageText}
                       onChange={UpdateMessageText} ref={NewMessageElement}></textarea>
            <button onClick={addMessage}>ОТПРАВИТЬ СООБЩЕНИЕ</button>
            <div className={classes.dialogs}>

                <div className={classes.item}>

                    <div><b>{dialogElement}</b></div>

                </div>
                <div>

                    {messageElement}
                </div>

            </div>
        </div>

    )

}

export default Dialogs;
