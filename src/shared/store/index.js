import { configureStore } from '@reduxjs/toolkit';

import userSlice from './users';
import userDataSlice from './users-data';

const store = configureStore({
    reducer: {user: userSlice.reducer, userData: userDataSlice.reducer}
});

export default store;