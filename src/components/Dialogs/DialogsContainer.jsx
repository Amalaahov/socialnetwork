

import {UpdateMessageTextCreator} from "../../redux/state";
import {AddMessageCreator} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) =>
{
   return    {
        MessengerData: state.MessengerData
    }
}
let mapDispatchToProps = (dispatch) =>
{
    return{
addMessage: ()=>
{
dispatch(AddMessageCreator());
},
        UpdateMessageText: (text)=>
        {
          dispatch(UpdateMessageTextCreator(text));
        }
    }
}
const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;
