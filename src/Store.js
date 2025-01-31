import { configureStore } from '@reduxjs/toolkit'
import { CurtSlice } from './Components/Slices/CurtSlice'
export default configureStore({
  reducer: {
    CurtItemManager : CurtSlice.reducer,
}
})