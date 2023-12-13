export function filterUnanswered(questions, id) {
  let filtered = [];

  Object.values(questions)?.forEach((q) => {
    let answered = [...(q?.optionOne?.votes || []), ...(q?.optionTwo?.votes || [])].includes(id);

    if (!answered) {
      filtered.push(q);
    }
  });

  return filtered;
}

export function filterAnswered(questions, id) {
  let filtered = [];

  Object.values(questions)?.forEach((q) => {
    let answered = [...(q?.optionOne?.votes || []), ...(q?.optionTwo?.votes || [])].includes(id);

    if (answered) {
      filtered.push(q);
    }
  });

  return filtered;
}

export function filterMine(questions, id) {
  return Object.values(questions)?.filter((q) => q.author === id);
}
