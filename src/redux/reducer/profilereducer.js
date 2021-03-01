import {profileApi} from "../../api/api";

const UP_STATUS_TEXT= 'UP_STATUS_TEXT';
const UP_JOB='UP_JOB';
const UP_CITY='UP_CITY';
const SET_STATUS='SET_STATUS';


let InitialState = {
    status: null,
    job:'Работа',
    city: 'Город',
    userId:''
}


const ProfileReducer = (state = InitialState, action) =>
{
    switch (action.type)
    {
        case SET_STATUS:
        {

               let copyState= {...state};
               copyState.status= action.status;
               return copyState;


        }

        case UP_STATUS_TEXT:
        {
return {...state, status: action.NewMessageText}

        }
        case UP_JOB:
        {
            let copyState={...state};
            copyState.job =action.NewTextJob;
            return copyState;
        }
        case UP_CITY:
        {
            let copyState={...state};
            copyState.city= action.NewTextCity;
            return copyState;
        }
        default:
            return state;
    }

}

export default ProfileReducer;

export const SetStatusAC = (status) => ({type:SET_STATUS, status});
export const UpdateStatusAC = (newTextMessage) => ({type: UP_STATUS_TEXT, newTextMessage});
export const UpdateJobAC = (NewTextJob) => ({type:UP_JOB, NewTextJob});
export const UpdateCityAC = (NewTextCity) => ({type:UP_CITY, NewTextCity});



export const GetStatusThunk = (userId) => (dispatch) => {

    profileApi.getStatus(userId).then(response => {

        dispatch(SetStatusAC(response.data));

    });
}
export const UpdateStatusThunk = (status) => (dispatch) => {

    profileApi.updateStatus(status).then(response => {

        dispatch(SetStatusAC(status));

    });
}

