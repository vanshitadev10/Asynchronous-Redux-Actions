import { createSlice } from "@reduxjs/toolkit";

const initialUserNumber = {totalUsers: 0, userId: [], hasError: false, isLoading: false};

const userSlice = createSlice({
    name: 'userData',
    initialState: initialUserNumber,
    reducers: {
        addItems(state, action) {
            const data = action.payload;
            state.userId = data.userId.map(item => item.id);
            state.totalUsers = data.totalUsers;
        },

        setErrorState(state, action){
            state.hasError = action.payload;
        },

        setLoadingState(state, action){
            state.isLoading = action.payload;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;