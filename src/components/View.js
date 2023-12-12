import React from 'react';
import { Poll } from '../features/polls/Poll';

export function View(props) {
  return (
    <Poll id={props.id} currentUser={props.currentUser} />
  );
}
