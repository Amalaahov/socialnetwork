import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogreducer from "./reducer/dialogreducer";
import usersreducer from "./reducer/usersreducer";
import wallreducer from "./reducer/wallreducer";
import UsersProfilereducer from './reducer/usersprofilereducer'
import authReducer from "./reducer/authreducer";
import ProfileReducer from "./reducer/profilereducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
 MessengerData: dialogreducer,
   WallDatas:  wallreducer,
   usersPage: usersreducer,
    UsersProfile: UsersProfilereducer,
    ProfieInfo: ProfileReducer,
    auth: authReducer,
    }

)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
