const immer = require('immer');
const produce = immer.produce;

/*
 Immer = work with immutable state in a convenient way

 current > draft > next
 */

const baseState = [
  {
    todo: 'learn typescript',
    done: true,
  },
  {
    todo: 'try immer',
    done: false,
  },
];

const nextState = produce(baseState, draftState => {
  draftState.push({todo: 'tweet about it', done: true})
});

console.log(nextState);
