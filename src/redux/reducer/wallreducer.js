
const ADD_POST = 'ADD-POST';
const UPD_TEXT_POST = 'UPDATE-TEXT-POST';


let initialState = {

    ProfileInfo: [
        {id: 1, Firstname: 'Саша', Secondname:'Малаахов', city:'Санкт-Петербург', job: 'Frontend-разработчик', avatar:'https://sun9-26.userapi.com/impf/c846520/v846520497/143c47/BJnz-LBzzOo.jpg?size=200x0&quality=90&crop=1059,169,899,1269&sign=6c20964b305f6dc10933ab8e3fdacdda&ava=1'},

    ],


        postData: [

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
                img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/2f901886-5a8b-4a33-a741-dae2646c1471/orig'
            },

        ],
        newTextPost: 'Новое сообщение'

}



const wallreducer = (state = initialState , action) => {


    switch(action.type)
    {
        case ADD_POST:{
            let firstname = state.ProfileInfo[0].Firstname;
            let secondname = state.ProfileInfo[0].Secondname;
            let newPost =
                {

                                id: 5,
                    message: state.newTextPost,
                    likesCount: 0,
                    name: firstname +' '+ secondname,
                    img: state.ProfileInfo[0].avatar
                };
let copyState = {...state};
copyState.postData = [...state.postData];
            copyState.postData.push(newPost);
            copyState.newTextPost = 'Новое сообщение';
            return copyState;
            }
        case UPD_TEXT_POST:{
            let copyState = {...state};

           copyState.newTextPost = action.newText;
            return copyState;
        }
        default:
            return state;
        

    }




}
export default wallreducer;
