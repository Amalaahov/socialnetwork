const SetUser_Data = 'SetUser_Data';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) =>
{
   switch (action.type)
   {
       case SetUser_Data:
           return{
               ...state,
               ...action.data,
               isAuth: true

           }

       default:

               return state;
   }

}
export const Set_User_Data = (userId,email,login) =>({type: SetUser_Data, data: {userId, email, login}});
export default authReducer;