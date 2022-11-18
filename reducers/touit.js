import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const touitSlice = createSlice({
    name: 'touit',
    initialState,
    reducers: {
        loadTouit: (state, action) => {
            state.value = action.payload;
        },
        addTouit: (state, action) => {
            state.value.unshift(action.payload)
        },
        likeTouit: (state, action) => {
            const index = state.value.findIndex(touit => touit._id === action.payload.touitId)
            const liked = state.value[index].like.some(user => user.userName === action.payload.userName)

            if (liked) {
                state.value[index].like = state.value[index].like.filter(user => user.userName !== action.payload.userName)
            } else {
                state.value[index].like.push({ userName: action.payload.userName })
            }
        },
        deleteTouit: (state, action) => {
            state.value = state.value.filter(touit => touit._id !== action.payload)
        }
    },
});

export const { loadTouit, addTouit, likeTouit, deleteTouit } = touitSlice.actions;
export default touitSlice.reducer;