



import UsersProfile from "./UsersProfile";
import {connect} from "react-redux";

import {ShowUserAC} from "../../redux/reducer/usersprofilereducer";
import {withRouter} from 'react-router-dom';



let mapStateToProps = (state) =>
{


            return {
      UserProfiles: state.UsersProfile.userProfile ,



    }

}
let mapDispatchToProps = (dispatch) =>
{
    return{
        ShowUserAC: (ShowUserData) =>
        {
            dispatch(ShowUserAC(ShowUserData));
        },

    }
}

let UserId = withRouter(UsersProfile);

const UsersProfileC = connect (mapStateToProps,mapDispatchToProps) (UserId);

export default UsersProfileC;