let users = {
  amy: {
    id: 'amy',
    password:'password123',
    name: 'Amy Wong',
    avatarURL: 'amy',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  bender: {
    id: 'bender',
    password:'abc321',
    name: 'Bender Bending Rodriguez',
    avatarURL: 'bender',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  farns: {
    id: 'farns',
    password:'xyz123',
    name: 'Professor Hubert J. Farnsworth',
    avatarURL: 'farns',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  fry: {
    id: 'fry',
    password:'pass246',
    name: 'Philip J. Fry',
    avatarURL: 'fry',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
    },
    questions: [],
  },
  leela: {
    id: 'leela',
    password:'pass789',
    name: 'Turanga Leela',
    avatarURL: 'leela',
    answers: {
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    },
    questions: [],
  },
  zapp: {
    id: 'zapp',
    password:'pass789',
    name: 'Zapp Brannigan',
    avatarURL: 'zapp',
    answers: {
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    },
    questions: [],
  },
  kif: {
    id: 'kif',
    password:'pass789',
    name: 'Kif Kroker',
    avatarURL: 'kif',
    answers: {
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    },
    questions: [],
  },
  zoid: {
    id: 'zoid',
    password:'pass789',
    name: 'John A. Zoidberg',
    avatarURL: 'zoid',
    answers: {
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    },
    questions: [],
  },
  hermes: {
    id: 'hermes',
    password:'pass789',
    name: 'Hermes Conrad',
    avatarURL: 'hermes',
    answers: {
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    },
    questions: [],
  },
  toad: {
    id: 'toad',
    password:'pass789',
    name: 'Hypno Toad',
    avatarURL: 'toad',
    answers: {
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    },
    questions: [],
  },

}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'hermes',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['amy'],
      text: 'be a limbo gold medalist',
    },
    optionTwo: {
      votes: [],
      text: 'be a bureaucrat'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'zapp',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'be the supreme leader of the universe',
    },
    optionTwo: {
      votes: ['farns', 'amy'],
      text: 'be the most handsome man in the universe'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'farns',
    timestamp: 1488579767190,
    optionOne: {
      votes: ['farns'],
      text: 'Good news, everyone!',
    },
    optionTwo: {
      votes: [],
      text: 'Bad news, everyone!'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'fry',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'drink Slurm',
    },
    optionTwo: {
      votes: ['amy'],
      text: 'eat pizza'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'bender',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['bender'],
      text: 'destroy all humans'
    },
    optionTwo: {
      votes: ['farns'],
      text: 'destroy all humans'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'bender',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['farns', 'fry'],
      text: 'bite my',
    },
    optionTwo: {
      votes: ['bender'],
      text: 'shiny metal ass'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((resolve) => {
    setTimeout(() => resolve({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((resolve) => {
    setTimeout(() => resolve({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  
  return new Promise((resolve, reject) => {
    if (!question.optionOneText || !question.optionTwoText || !question.author) {
      reject("Please provide optionOneText, optionTwoText, and author");
    }

    const formattedQuestion = formatQuestion(question)
    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      resolve(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((resolve, reject) => {
    if (!authedUser || !qid || !answer) {
      reject("Please provide authedUser, qid, and answer");
    }

    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      resolve(true)
    }, 500)
  })
}
