
import { connect } from 'react-redux';
import Findusers from './FindusersС.jsx';
import {
    ToggleFetchingAC,
    setCurrentPageAC,
    setTotalCountAC,
    followAC,
    setUsersAC,
    unfollowAC,
    getUsersThunk, pageChangeThunk
} from '../../redux/reducer/usersreducer';





let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
        
    }
}



/*let mapDispatchToProps = (dispatch) =>{
return{
    ToggleFetching: (isFetching) =>
    {
        dispatch(ToggleFetchingAC(isFetching));
    },
    follow: (userId) =>
    {
        dispatch(followAC(userId));
    },
    unfollow: (userId) =>
    {
        dispatch (unfollowAC(userId));
    },
    setUsers: (users) =>
    {
        dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) =>
    {
        dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalCount: (totalCount) =>
    {
        dispatch(setTotalCountAC(totalCount));
    }
}
}*/


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
        }
    ) (Findusers);