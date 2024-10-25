import { createSlice } from '@reduxjs/toolkit';
import { handleGetAllUsersAsync } from './user.async.thunk';

export const itemSlice = createSlice({
    name: 'user',
    initialState: {
        users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        selectedIndexes: [],
    },
    reducers: {
        isSelected: (state, action) => {
            const index = action.payload;
            return state.selectedIndexes.includes(index);
        },
        toggleSelectItem: (state, action) => { 
            const index = action.payload;
            if (state.selectedIndexes.includes(index) === false) {
                state.selectedIndexes.push(index);
            } else {
                state.selectedIndexes = state.selectedIndexes.filter(id => id !== index);
            }
        },
    },
    extraReducers: (builder) => { 
        handleGetAllUsersAsync(builder);
    }
});

export const { isSelected, toggleSelectItem } = itemSlice.actions;

export default itemSlice.reducer;