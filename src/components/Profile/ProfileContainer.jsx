import {compose} from "redux";
import Profile from "./Profile";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {connect} from "react-redux";
import {GetStatusThunk, UpdateStatusAC, UpdateStatusThunk} from "../../redux/reducer/profilereducer";
import {UpdateJobAC} from "../../redux/reducer/profilereducer";
import {UpdateCityAC} from "../../redux/reducer/profilereducer";

let mapStateToProps = (state) =>
{

return{
    profileInfo: state.ProfieInfo,
    authInfo: state.auth,

}
}
let mapDispatchToProps = (dispatch) =>
{
    return {
        updateStatus: (text) => {
            dispatch(UpdateStatusAC(text));
        },
        updateJob: (textJob) =>
        {
            dispatch(UpdateJobAC(textJob));
        },
        updateCity: (textCity)=>
        {
            dispatch(UpdateCityAC(textCity))
        },
        GetStatus: (userId) =>
        {
            dispatch(GetStatusThunk(userId))
        },
        UpdateStatus: (status) =>
        {
            dispatch(UpdateStatusThunk(status))
        }

    }
}

export default compose(
    connect (mapStateToProps,mapDispatchToProps),

)(Profile);