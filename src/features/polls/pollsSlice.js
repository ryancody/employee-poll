import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    polls: [{
        id: crypto.randomUUID(),
        optionA: 'foo',
        optionB: 'bar',
        votesA: [],
        votesB: [],
        authorName: 'Zapp Brannigan'
    },
    {
        id: crypto.randomUUID(),
        optionA: 'baz',
        optionB: 'qux',
        votesA: [],
        votesB: [],
        authorName: 'Kif Kroker'
    }]
};

export const pollsSlice = createSlice({
    name: 'polls',
    initialState,
    reducers: {
        add: (state, action) => {
            state.polls.push({
                id: crypto.randomUUID(),
                optionA: action.payload.optionA,
                optionB: action.payload.optionB,
                votesA: [],
                votesB: [],
                authorName: action.payload.user.name
            });
        },
        remove: (state, action) => {
            state.polls = state.polls.filter(i => i.name !== action.payload.name);
        },
        voteA: (state, action) => {
            const poll = state.polls.find(poll => poll.id === action.payload.id);
            poll.votesA.push(action.payload.user);
        },
        voteB: (state, action) => {
            const poll = state.polls.find(poll => poll.id === action.payload.id);
            poll.votesB.push(action.payload.user);
        }
    },
});

export const { add, remove, voteA, voteB } = pollsSlice.actions;

export const selectPolls = state => state.polls.polls;

export default pollsSlice.reducer;
