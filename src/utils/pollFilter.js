export function filterUnanswered(polls, username) {
  let filteredPolls = [];

  polls.forEach((p) => {
    let answered = false;
    [...p.votesA, ...p.votesB].forEach((v) => {
      if (v.user.name === username) {
        answered = true;
      }
    });

    if (!answered) {
      filteredPolls.push(p);
    }
  });

  return filteredPolls;
}

export function filterAnswered(polls, username) {
    let filteredPolls = [];
  
    polls.forEach((p) => {
      let answered = false;
      [...p.votesA, ...p.votesB].forEach((v) => {
        if (v.user.name === username) {
          answered = true;
        }
      });
  
      if (answered) {
        filteredPolls.push(p);
      }
    });
  
    return filteredPolls;
  }

export function filterMine(polls, username) {
  return polls.filter((poll) => poll.authorName === username);
}
