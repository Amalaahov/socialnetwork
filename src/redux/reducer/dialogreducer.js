const UPD_TEXT_MSG ='UPDATE-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {

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
        {id: 5, message: 'IT-Kamasutra'}
        ]
    ,
    NewMessageText: 'Enter New Message'
}

const dialogreducer = (state = initialState, action) =>
{
    switch (action.type)
    {


case UPD_TEXT_MSG:
    {
        let copyState = {...state};
        copyState.NewMessageText = action.newTextMessage;
        return copyState    ;
    }

        case ADD_MESSAGE:
            {
        let newMessage =
            {
                id: 5,
                message: state.NewMessageText,


            };
let copyState = {...state};
copyState.MessageData = [...state.MessageData];
        copyState.MessageData.push(newMessage);
        copyState.NewMessageText = 'Enter New Message';
return copyState;
        }


        default:
            return state;

}
}

export default dialogreducer;