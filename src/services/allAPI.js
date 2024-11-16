import commonAPI from "./commonAPI";
import SERVERURL from "./serverurl";

export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/art/add`,reqBody)
}

export const getAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/get-items`)
}

export const deleteAPI = async (pid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/item/:${pid}/remove`,"",reqHeader)
}
