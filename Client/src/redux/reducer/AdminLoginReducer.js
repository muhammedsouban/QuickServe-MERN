const initialstate={
    email:"",
    password:""
}


const AdminLoginReducer = (state=initialstate,action)=>{

    switch(action.type){
        case 'ADMIN_LOGIN':
            return{
                ...state,
                [action.field]:action.value
            }
        default:
            return state
    }

}

export default AdminLoginReducer