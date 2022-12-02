import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
//all dispatch
export const addUser = createAsyncThunk("users/add" , async(user)=> {
    const res = await axios.post("http://localhost:5000/api/users" , user)
    return res.data
})//

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData :{
        name: "",
        email: "",},

        loading: null,
        error: false,
    },
    reducers: { //action in reducer
        // adduser: (state, action) => {
        // state.name = action.payload.name;
        // state.email = action.payload.email;
        // },
        // startuser: (state) => {
        // state.loading = true;
        // },
        // successuser: (state , action) => {
        // state.userData = action.payload;
        // state.loading = false;
        // },
        // erroruser: (state) => {
        // state.loading = false;
        // state.error = true;
        // }
    },
    extraReducers : {
        [addUser.pending] : (state) => {state.loading = true},
        [addUser.fulfilled] : (state , action) => { state.userData = action.payload;
                                                    state.loading = false;},
        [addUser.rejected] : (state) =>{state.loading = false;
                                        state.error = true;},
    }

})
//export const { adduser , startuser , successuser , erroruser} = userSlice.actions

export default userSlice.reducer