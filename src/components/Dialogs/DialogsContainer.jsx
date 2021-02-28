

import {UpdateMessageTextCreator} from "../../redux/state";
import {AddMessageCreator} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";





let mapStateToProps = (state) =>
{
   return    {
        MessengerData: state.MessengerData,
       isAuth: state.auth.isAuth
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

let AuthRedirectComponent = AuthRedirect(Dialogs);
const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;
