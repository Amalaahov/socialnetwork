import {FindUsers} from "../../api/api";
import * as axios from "axios";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';



let initialState = {

    
       users: [
            

        ],
        pageSize: 20,
        totalUsersCount: 0,
        currentPage: 1,
               newTextPost: 'Новое сообщение',
    isFetching: false

}



const usersreducer = (state = initialState , action) => {


    switch(action.type)
    {
        case FOLLOW:{
            return{
                ...state,
                users: state.users.map(u =>{
                    if(u.id === action.userId )
                    {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
            case UNFOLLOW:
                {
            return{
                ...state,
                users: state.users.map(u =>{
                    if(u.id === action.userId )
                    {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
            case SET_USERS:                {
                    return{...state, users: action.users }
                }
        case TOGGLE_FETCHING:                {
            return{...state, isFetching: action.isFetching }
        }
                case SET_CURRENT_PAGE: return{...state, currentPage: action.currentPage}

                case SET_USERS_COUNT: return{...state, totalUsersCount: action.count}
        default:
            return state;
        

    }




}
export const followAC = (userId) => ({type: FOLLOW , userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW , userId})
export const setUsersAC = (users) => ({type: SET_USERS , users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE , currentPage})
export const setTotalCountAC = (totalCount) => ({type: SET_USERS_COUNT , count: totalCount})
export const ToggleFetchingAC = (isFetching) => ({type:TOGGLE_FETCHING, isFetching})

export default usersreducer;


export const getUsersThunk = (currentPage, pageSize) =>
{
    return (dispatch) =>
    {
        dispatch(ToggleFetchingAC(true));
        FindUsers(currentPage,pageSize)
            .then(data => {
         dispatch(setUsersAC(data.data.items));
                dispatch(setTotalCountAC(data.data.totalCount));
            });
        dispatch(ToggleFetchingAC(false));
    }
}

export const pageChangeThunk = (pageNumber,pageSize) =>
    {
        return (dispatch) =>
        {
           dispatch(ToggleFetchingAC(true));
          dispatch(setCurrentPageAC(pageNumber));
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
                .then(data => {
                    dispatch(setUsersAC(data.data.items));

                });
            dispatch(ToggleFetchingAC(false));
        }
    }
