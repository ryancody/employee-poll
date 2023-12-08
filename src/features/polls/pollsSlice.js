import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    polls: [{
        id: crypto.randomUUID(),
        optionA: 'be the supreme leader of the universe',
        optionB: 'be the most handsome man in the universe',
        votesA: [],
        votesB: [],
        authorName: 'Zapp Brannigan'
    },
    {
        id: crypto.randomUUID(),
        optionA: 'rob a bank',
        optionB: 'bite my shiny metal ass',
        votesA: [],
        votesB: [],
        authorName: 'Bender Bending Rodriguez'
    },
    {
        id: crypto.randomUUID(),
        optionA: 'be a limbo gold medalist',
        optionB: 'be a bureaucrat',
        votesA: [],
        votesB: [],
        authorName: 'Hermes Conrad'
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
            poll.votesA.push({  option: poll.optionA, user: action.payload.user, timestamp: Date.now() });
        },
        voteB: (state, action) => {
            const poll = state.polls.find(poll => poll.id === action.payload.id);
            poll.votesB.push({ option: poll.optionB, user: action.payload.user, timestamp: Date.now() });
        }
    },
});

export const { add, remove, voteA, voteB } = pollsSlice.actions;

export const selectPolls = state => state.polls.polls;

export default pollsSlice.reducer;
