const ShowUser = 'ShowUser';

let InitialState = {
    userProfile: {
fullName: null,
        contacts: {
            facebook: null,
            website: null,
            github: null,
            instagram: null,
            twitter: null,
            youtube: null
        },
        photos:
            {
                small: null,
                large: null
            }
}



}

const UsersProfilereducer = (state = InitialState, action) =>
{
    switch (action.type)
    {
        case ShowUser:
        {
            return {...state,userProfile:action.ShowUserData}
        }
    }
    return state;

}
export default UsersProfilereducer;
export const ShowUserAC = (ShowUserData) =>  ({type: ShowUser , ShowUserData})
