


import {addPostActionCreator, UpdateTextPostActionCreator} from "../../redux/state";
import Content from "./Content";
import {connect} from "react-redux";




let mapStateToProps = (state) =>
{
    return {
        WallData: state.WallDatas
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

const ContentContainer = connect (mapStateToProps,mapDispatchToProps) (Content);

export default ContentContainer;