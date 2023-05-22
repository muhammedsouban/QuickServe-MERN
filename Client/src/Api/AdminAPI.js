import { Axiosadmin } from "../axios";

//services
export const getServices = async () => {
    const res = await Axiosadmin.get("/service")
    return res.data;
}
export const AddService = async (formData, headers) => {
    const res = await Axiosadmin.post("/service", formData, { headers })
    return res.data;
}
export const editService = async (serviceId, headers) => {
    const res = await Axiosadmin.get(`/service/${serviceId}`, headers)
    return res.data;
}
export const updateService = async (serviceId, headers, FormData) => {
    const res = await Axiosadmin.put(`/service/${serviceId}`, FormData, { headers })
    return res.data;
}
export const deleteService = async (serviceId, headers) => {
    const res = await Axiosadmin.delete(`/service/${serviceId}`, { headers })
    return res.data;
}


//categories

export const addCategory = async (formdata, headers) => {
    const res = await Axiosadmin.post("/category", formdata, { headers });
    return res.data;
};
export const getCategories = async () => {
    const res = await Axiosadmin.get("/category");
    return res.data;
};

export const editCategory = async (Id, headers) => {
    const res = await Axiosadmin.get(`/category/${Id}`, { headers });
    return res.data;
};
export const updateCategory = async (Id, FormData, headers) => {
    const res = await Axiosadmin.put(`/category/${Id}`, FormData, { headers });
    return res.data;
};
export const deleteCategory = async (Id, headers) => {
    const res = await Axiosadmin.delete(`/category/${Id}`, { headers });
    return res.data;
};

//providers

export const getProvider = async (headers) => {
    const res = await Axiosadmin.get(`/providers`, { headers });
    return res.data;
};
export const ApproveProvider = async (providerId, headers) => {
    const res = await Axiosadmin.put(`provider-Approve/${providerId}`,{}, {headers});
    return res.data;
};
export const blockProvider = async (providerId, headers) => {
    const res = await Axiosadmin.put(`/provider-Block/${providerId}`, {}, { headers });
    return res.data;
};

export const UnBlockProvider = async (providerId, headers) => {
    const res = await Axiosadmin.put(`/provider-Unblock/${providerId}`, {}, { headers });
    return res.data;
};
