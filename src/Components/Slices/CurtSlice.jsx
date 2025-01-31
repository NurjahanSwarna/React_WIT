import { createSlice } from '@reduxjs/toolkit'

export const CurtSlice = createSlice({
  name: 'CurtItemManager',
  initialState: {
   cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
  addToCard: (state , action) => {
    let findItem = state.cartItems.findIndex((item)=>item.id===action.payload.id);

    if(findItem === -1){
      state.cartItems.push(action.payload);
      localStorage.setItem('cart',JSON.stringify(state.cartItems));
    } else{
      state.cartItems[findItem].qty += 1;
      localStorage.setItem('cart',JSON.stringify(state.cartItems));
    }

    },
    deleteItem: (state , action) => {
    state.cartItems.splice(action.payload , 1)
    localStorage.setItem('cart',JSON.stringify(state.cartItems));
    }, 
    increment: (state , action) =>{
      state.cartItems[action.payload].qty +=1;
      localStorage.setItem('cart',JSON.stringify(state.cartItems));
    },
    decrement:(state , action) =>{
      if( state.cartItems[action.payload].qty > 1){
        state.cartItems[action.payload].qty -=1;
      }
      localStorage.setItem('cart',JSON.stringify(state.cartItems));
    },
    clearCart: (state) =>{
      state.cartItems = [];
      localStorage.setItem('cart',JSON.stringify(state.cartItems));
    }
  },
})

// Action creators are generated for each case reducer function
export const {addToCard , deleteItem , increment ,decrement , clearCart} = CurtSlice.actions

export default CurtSlice.reducer