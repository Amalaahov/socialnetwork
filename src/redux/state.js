import wallreducer from "./reducer/wallreducer";
import dialogreducer from "./reducer/dialogreducer";

let state = {
    _state : {

        ProfileInfo: [
            {id: 1, Firstname: 'Саша', Secondname:'Малаахов', city:'Санкт-Петербург', job: 'Frontend-разработчик', avatar:'https://sun9-26.userapi.com/impf/c846520/v846520497/143c47/BJnz-LBzzOo.jpg?size=200x0&quality=90&crop=1059,169,899,1269&sign=6c20964b305f6dc10933ab8e3fdacdda&ava=1'},

        ],
   MessengerData: {
        DialogsData: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Polina'},
            {id: 3, name: 'Mark'},
            {id: 4, name: 'Pavel'},
            {id: 5, name: 'Bill'},
        ],
        MessageData: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Как дела?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'ReactJS'},
            {id: 5, message: 'IT-Kamasutra'},
        ],
       NewMessageText: 'Enter New Message'
       },

         WallDatas: {
             postData: [
                 {
                     id: 1,
                     message: 'Как твои дела?',
                     likesCount: '11',
                     name: 'Скарлет Йоханссон',
                     img: 'https://thumbs.dfs.ivi.ru/storage33/contents/f/b/722ce30ba1a228f9d1aa5650db3aea.jpg'
                 },
                 {
                     id: 2,
                     message: 'Привет!',
                     likesCount: '2',
                     name: 'Elven Bacon',
                     img: 'https://sun9-5.userapi.com/impf/c840133/v840133948/4ddf1/SKM1-SBxrrc.jpg?size=200x0&quality=96&crop=784,33,746,1096&sign=0ef041bc6a0a369e414da4a3d70af83f&ava=1'
                 },
                 {
                     id: 3,
                     message: 'Это мой первый пост!',
                     likesCount: '23',
                     name: 'Элизабет Олсен',
                     img: 'https://www.film.ru/sites/default/files/people/1576149-832820.jpg'
                 },

             ],
             newTextPost: 'Новое сообщение'
         },


        settingsName:'Enter your name',
        settingsCity:'Enter your city',
        settingsJob:'Enter your job'

    },
    _rerender (){   },

    getState() {
        return this._state;
    },
    subscribe (observer)     {
        this._rerender = observer;
    },
 dispatch (action)
 {

     this._state = wallreducer(this._state, action);
     this._state.MessengerData = dialogreducer(this._state.MessengerData, action)

     this._rerender(this._state);



 },


    updateNameText (props)     {

        this._state.settingsName = props;
        this._rerender(this._state);
    },
    updateCityText (props)    {

        this._state.settingsCity = props;
        this._rerender(this._state);
    },
    updateProfileInfo(props) {

        this._state.ProfileInfo[0].name = props;
        this._rerender(this._state);
    },





}


export const addPostActionCreator = () =>{
    return{
        type: 'ADD-POST'
    }
}
export const UpdateTextPostActionCreator = (text) =>{
    return{
        type:'UPDATE-TEXT-POST',
        newText: text
    }

}
export const UpdateMessageTextCreator = (text) =>
{
return{
    type:'UPDATE-TEXT-MESSAGE',
    newTextMessage: text
}


}
export const AddMessageCreator = () =>
{
    return{
        type: 'ADD-MESSAGE'
    }
}














window.state = state;
export default state;

