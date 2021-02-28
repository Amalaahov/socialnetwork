


import {addPostActionCreator, UpdateTextPostActionCreator} from "../../redux/state";
import Content from "./Content";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";





let mapStateToProps = (state) =>
{
    return {
        WallData: state.WallDatas,
        isAuth: state.auth.isAuth
    }

}
let mapDispatchToProps = (dispatch) =>
{
    return{
UpdateNewText : (text)=>
{
    dispatch(UpdateTextPostActionCreator(text));    
},

        AddPost : () =>
        {
            dispatch(addPostActionCreator());
        }
    }
}

export default compose(
    connect (mapStateToProps,mapDispatchToProps),
    AuthRedirect
)(Content);
