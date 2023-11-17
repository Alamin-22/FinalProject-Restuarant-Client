import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const useAxios = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("AccessToken");
        // console.log("REQuest Bondho Kora hoise by Interceptor", token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    })
    // interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log("status error in the interceptor ", status);
        if (status === 401 || status === 403) {
            await logout();
            navigate("/login")
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxios;