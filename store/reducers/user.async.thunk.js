import { createAsyncThunk } from '@reduxjs/toolkit'
import UserService from '../../services/user.service';

export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        const responseData = await UserService.getAllUsers();
        return responseData;
    }
)
export const handleGetAllUsersAsync = (builder) => {
    builder
        .addCase(getAllUsers.pending, () => {
            console.log('loading');
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload.map(x => x);
            console.log('All users loaded successfully');
        })
        .addCase(getAllUsers.rejected, () => {
            console.log('failed');
        });
};