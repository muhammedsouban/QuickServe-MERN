
import Axios from "axios";

const Axiosuser = Axios.create({
    baseURL: "http://localhost:8080/",
});

const Axiosadmin = Axios.create({
    baseURL: "http://localhost:8080/admin/",
});

export { Axiosuser, Axiosadmin };