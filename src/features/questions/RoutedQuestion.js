import React from 'react';
import { useSelector } from 'react-redux';
import { Question } from './Question';
import { selectQuestions } from './questionsSlice';
import { useParams } from 'react-router-dom';

export function RoutedQuestion() {
    const { questionId } = useParams();
    const question = useSelector(selectQuestions)[questionId];

    return <Question question={question} showResponses={true} />;
}
