
import { connect } from 'react-redux';
import Findusers from './FindusersС.jsx';
import {setCurrentPageAC, setTotalCountAC, followAC, setUsersAC, unfollowAC } from '../../redux/reducer/usersreducer';





let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
        
    }
}



let mapDispatchToProps = (dispatch) =>{
return{
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
}


export default connect(mapStateToProps, mapDispatchToProps) (Findusers);