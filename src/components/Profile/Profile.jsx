import React  from 'react';
import './Profile.css';
import state from "../../redux/state";
import EditModePic from '../../assets/image/editmode.png'





class Profile  extends React.Component{


componentDidMount() {


}

    state = {
        editMode: false,
        status: this.props.profileInfo.status,
    }

    activateEditMode = () =>
    {
this.state.status= this.props.profileInfo.status
        this.setState({editMode:true})
    }
    deactivateEditMode=() =>

    {


        this.setState({editMode:false})
        this.props.UpdateStatus(this.state.status);




    }
    render () {
        this.props.GetStatus(this.props.authInfo.userId);
        let NewMessageElement = React.createRef();
        let NewJobElement = React.createRef();
        let NewCityElement = React.createRef();
let changeStatus = (e) =>
{

  this.setState(
      {
          status: e.currentTarget.value
      }
  )




}
let changeCity = () =>
{
    let NewCityText = NewCityElement.current.value;
    this.props.updateCity(NewCityText);
}
        let changeJob = () =>
        {

            let NewJobText = NewJobElement.current.value;
            this.props.updateJob(NewJobText);
        }


return (

        <nav className='profile'>

            <div className='item'><img src={state._state.ProfileInfo[0].avatar}/></div>

            {!this.state.editMode &&<div><span onDoubleClick={this.activateEditMode}>{this.props.profileInfo.status}</span>{!this.state.editMode && <img className='settings' onClick={this.activateEditMode} src={EditModePic}/>}</div>}
            {this.state.editMode &&<div> <input  onChange={changeStatus} ref={NewMessageElement} value={this.state.status} /></div>}
            {!this.state.editMode &&<div><span onDoubleClick={this.activateEditMode}>{this.props.profileInfo.job}</span></div>}
            {this.state.editMode &&<div> <input onChange={changeJob} ref={NewJobElement} value={this.props.profileInfo.job}  /></div>}
            {!this.state.editMode &&<div><span onDoubleClick={this.activateEditMode}>{this.props.profileInfo.city}</span></div>}
            {this.state.editMode &&<div> <input onChange={changeCity} ref={NewCityElement} value={this.props.profileInfo.city}  /></div>}
            <div> {this.state.editMode && <button onClick={this.deactivateEditMode} >Сохранить</button> }</div>
            <br></br>
            <div>Подписок:</div>
            <div><b>34</b></div>
            <br></br>
            <div>Подписчиков:</div>
            <div><b>155</b></div>
            <br></br>

        </nav>
)
    }
}

export default Profile;