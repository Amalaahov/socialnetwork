import React from 'react';
import classes from './Settings.module.css';





let textname = React.createRef();
let textcity = React.createRef();
let textjob = React.createRef();

const Settings = (props) => {
 let push = () =>
    {
let profilename = textname.current.value;
props.updateProfileInfo(profilename);

    }
    let nameChange = () =>
    {
        let textName = textname.current.value;
        props.updateNameText(textName);
    }
    let cityChange = () =>
    {
        let textCity = textcity.current.value;
        props.updateCityText(textCity);
    }
return(
    <div className={classes.item}>SETTINGS
    <div>Имя<textarea onChange={nameChange} ref={textname} value={props.TextName}/></div>
        <div>Город<textarea onChange={cityChange} ref={textcity} value={props.TextCity}/></div>
        <div>Профессия<textarea ref={textjob}>Job</textarea></div>

<button onClick={push}>СОХРАНИТЬ</button>

    </div>

    

)
}

export default Settings;