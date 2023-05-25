import { Axiosuser } from "../axios";


export const userLogin = async (email,password) => {
    const res = await Axiosuser.post("/login",{email,password})
    return res;
}
export const userSignup=async(formData)=>{
    const res =await Axiosuser.post("/register",formData)
    return res;
}

export const addToCart =async(serviceId,headers)=>{
    const res = await Axiosuser.post(`/cart/${serviceId}`,{},{headers})
    return res
}