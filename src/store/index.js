import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./modules/user"

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true  // 确保开启了 devTools
})