import { createSlice } from "@reduxjs/toolkit"
import {requst} from "@/utils"
import {loginAPI, profileAPI} from "@/apis/user"
import { setToken as setTokenAction, getToken, removeToken } from '@/utils'
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
        },
        clearUserInfo(state, action) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})
// 解构
const { setToken, setUserInfo, clearUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) =>{
    return async (dispatch) => {
        const res = await loginAPI(loginForm)
        console.log(res.data.token)
        dispatch(setToken(res.data.token))
    }
}
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await profileAPI()
        dispatch(setUserInfo(res.data))
    }
}
// 导出
export default userReducer
export {fetchLogin,fetchUserInfo,setToken,clearUserInfo}