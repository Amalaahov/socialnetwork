
import { connect } from 'react-redux';
import Findusers from './FindusersС.jsx';
import {
    ToggleFetchingAC,
    setCurrentPageAC,
    setTotalCountAC,
    followAC,
    setUsersAC,
    unfollowAC,
    getUsersThunk, pageChangeThunk, UnfollowUserThunk, FollowUserThunk
} from '../../redux/reducer/usersreducer';

import {AuthRedirect} from "../../hoc/AuthRedirect";





let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth
        
    }
}
let AuthRedirectComponent = AuthRedirect(Findusers);

export default connect(mapStateToProps,
    {
        ToggleFetching:ToggleFetchingAC,
        follow:followAC,
        unfollow:unfollowAC,
        setUsers:setUsersAC,
        setCurrentPage:setCurrentPageAC,
        setTotalCount: setTotalCountAC,
        getUsersThunk: getUsersThunk,
        pageChangeThunk: pageChangeThunk,
        UnfollowThunk: UnfollowUserThunk,
        FollowThunk: FollowUserThunk
        }
    ) (AuthRedirectComponent);