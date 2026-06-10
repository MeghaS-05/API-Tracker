import axois from "axios";

export const sendRequest = async(
    method,
    url,
    body
)=>{
    const response = await axois.post(
        "http://localhost:5000/api/request", {
            method,
            url,
            body,
        }
    );

    return response.data;
};