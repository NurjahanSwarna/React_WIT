// import { configureStore } from '@reduxjs/toolkit'
import { CurtSlice } from './Components/Slices/CurtSlice'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    CurtItemManager : CurtSlice.reducer,
}
})