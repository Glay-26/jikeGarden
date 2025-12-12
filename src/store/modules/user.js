import { createSlice } from "@reduxjs/toolkit"
import {requst} from "@/utils"
import { setToken as setTokenAction, getToken } from '@/utils'
const userStore = createSlice({
    name: "user",
    initialState: {
        token:getToken() || ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            setTokenAction(action.payload)
            // localStorage.setItem('token', action.payload)
        },
    }
})
const { setToken } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) =>{
    return async (dispatch) => {
        const res = await requst.post('/authorizations', loginForm)
        console.log(res.data.token)
        dispatch(setToken(res.data.token))
    }
}


export default userReducer
export {fetchLogin,setToken}