import { createSlice } from "@reduxjs/toolkit";

const initialUserData = {userName: '', userEmail: '', userImage: '', hasError: false, isLoading: false};

const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialUserData,
    reducers: {
        setData(state, action) {
            const data = action.payload;
            console.log(data)
            state.userName = `${data.first_name} ${data.last_name}`;
            state.userEmail = data.email;
            state.userImage = data.avatar;
        },

        setErrorState(state, action){
            state.hasError = action.payload;
        },

        setLoadingState(state, action){
            state.isLoading = action.payload;
        }
    }
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice;