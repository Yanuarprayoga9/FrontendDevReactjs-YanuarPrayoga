import axios from "axios";
import api from "."

export function getAccessToken() {
    return localStorage.getItem("accessToken");
}

export function putAccessToken(accessToken:string) {
    return localStorage.setItem("accessToken", accessToken);
}



export const getRestaurants = async () => {
    try {
        const res = await axios.get(`https://restaurant-api-sekawan-media-yanuar.vercel.app/api/restaurants`)
        return res.data.data;

    } catch (error) {
        return false;
    }
}
export const getCategories = async () => {
    try {
        const res = await api.get(`/category`)
        return res.data
    } catch (error) {
        return false;
    }
}