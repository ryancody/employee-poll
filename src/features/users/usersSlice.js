import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [{
        name: 'Zapp Brannigan',
        icon: 'zapp.png'
    }, {
        name: 'Kif Kroker',
        icon: 'kif.png'
    }, {
        name: 'Philip J. Fry',
        icon: 'fry.png'
    }, {
        name: 'Turanga Leela',
        icon: 'leela.png'
    }, {
        name: 'Bender Bending Rodriguez',
        icon: 'bender.png'
    }, {
        name: 'John A. Zoidberg',
        icon: 'zoid.png'
    }, {
        name: 'Hermes Conrad',
        icon: 'hermes.png'
    }, {
        name: 'Amy Wong',
        icon: 'amy.png'
    }, {
        name: 'Professor Hubert J. Farnsworth',
        icon: 'farns.png'
    }, {
        name: 'Hypno Toad',
        icon: 'toad.png'
    }],
    currentUser: null
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, user) => {
            state.users.push(user);
        },
        remove: (state, action) => {
            state.users = state.users.filter(i => i.name !== action.payload.name);
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        removeCurrentUser: (state) => {
            state.currentUser = null;
        },
        getUserByName: (state, action) => {
            return state.users.find(user => user.name === action.payload.name);
        }
    },
});


export const { add, remove, setCurrentUser, removeCurrentUser, getUserByName } = usersSlice.actions;

export const selectUsers = state => state.users.users;
export const selectCurrentUser = state => state.users.currentUser;

export default usersSlice.reducer;
