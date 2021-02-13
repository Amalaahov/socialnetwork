import {combineReducers, createStore} from "redux";
import dialogreducer from "./reducer/dialogreducer";
import usersreducer from "./reducer/usersreducer";
import wallreducer from "./reducer/wallreducer";



let reducers = combineReducers({
 MessengerData: dialogreducer,
   WallDatas:  wallreducer,
   usersPage: usersreducer
    }

)

let store = createStore(reducers);

window.store = store;

export default store;
