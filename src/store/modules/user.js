import { createSlice } from "@reduxjs/toolkit"
import {requst} from "@/utils"
import { setToken as setTokenAction, getToken } from '@/utils'
const userStore = createSlice({
    name: "user",
    initialState: {
        token:getToken() || '',
        userInfo: {}
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            setTokenAction(action.payload)
            // localStorage.setItem('token', action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})
const { setToken, setUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) =>{
    return async (dispatch) => {
        const res = await requst.post('/authorizations', loginForm)
        console.log(res.data.token)
        dispatch(setToken(res.data.token))
    }
}
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await requst.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}
export default userReducer
export {fetchLogin,fetchUserInfo,setToken}