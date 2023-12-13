import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

// {
//     users: [{
//         name: 'Zapp Brannigan',
//         icon: 'zapp.png'
//     }, {
//         name: 'Kif Kroker',
//         icon: 'kif.png'
//     }, {
//         name: 'Philip J. Fry',
//         icon: 'fry.png'
//     }, {
//         name: 'Turanga Leela',
//         icon: 'leela.png'
//     }, {
//         name: 'Bender Bending Rodriguez',
//         icon: 'bender.png'
//     }, {
//         name: 'John A. Zoidberg',
//         icon: 'zoid.png'
//     }, {
//         name: 'Hermes Conrad',
//         icon: 'hermes.png'
//     }, {
//         name: 'Amy Wong',
//         icon: 'amy.png'
//     }, {
//         name: 'Professor Hubert J. Farnsworth',
//         icon: 'farns.png'
//     }, {
//         name: 'Hypno Toad',
//         icon: 'toad.png'
//     }],
//     currentUser: null,
//     from: '/'
// };

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setFrom: (state, action) => {
            state.from = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    },
});


export const { setUsers, setCurrentUser, setFrom } = usersSlice.actions;

export const selectUsers = state => state.users.users;
export const selectCurrentUser = state => state.users.currentUser;
export const selectFrom = state => state.users.from;

export default usersSlice.reducer;
