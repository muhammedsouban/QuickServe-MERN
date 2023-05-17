const initialstate={
    email:"",
    password:""
}

const UserLoginReducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return {
                ...state,
                [action.field]:action.value
            }

        default:
            return state
    }
}



export default UserLoginReducer