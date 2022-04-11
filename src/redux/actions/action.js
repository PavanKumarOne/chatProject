import {AUTH} from "../configs/types";

export const login=()=>({
    type:AUTH.LOGIN,
})

export const logout=()=>({
    type:AUTH.LOGOUT
})