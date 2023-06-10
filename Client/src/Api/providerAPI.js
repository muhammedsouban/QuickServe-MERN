import { AxiosProvider } from "../axios";

export const bookingRequests = async (headers) => {
    const res = await AxiosProvider.get('/bookingRequests', {headers} )
    return res
}

export const getProviderprofile = async (headers) => {
    const res = await AxiosProvider.get('/profile', {headers} )
    return res
}
export const acceptRequest=async(data,headers)=>{
    const res = await AxiosProvider.post('/acceptBooking',{data}, {headers} )
    return res
}