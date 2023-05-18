const initialstate ={
    servicename:"",
    description:"",
    image:"",
    serviceincludes:"",
    category:'',
    price:""

}


const ServiceReducer = (state=initialstate,action)=>{
    switch(action.type){

        case "SERVICES":
            return{
                ...state,
                [action.field]:action.value
            }
        default:
            return state
        
    }
}

export default ServiceReducer