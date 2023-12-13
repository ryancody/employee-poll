import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        add: (state, action) => {
            state.questions[action.payload.id] = action.payload
        },
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        vote: (state, action) => {
            const q = state.questions[action.payload.qid]
            if(action.payload.answer === 'optionOne')
                q.optionOne.votes.push(action.payload.authedUser);
            else
                q.optionTwo.votes.push(action.payload.authedUser);
        }
    },
});

export const { add, vote, setQuestions } = questionsSlice.actions;

export const selectQuestions = state => state.questions.questions;

export default questionsSlice.reducer;
