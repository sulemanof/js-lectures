// my custom array map
// write your own method which implements Array.prototype.map

function customMap(callback) {
  // ...
}

Array.prototype.customMap = customMap;


// ################################


// my custom array filter
// write your own method which implements Array.prototype.filter

function customFilter(callback) {
  // ...
}

Array.prototype.customFilter = customFilter;


// ################################


// calculate all votes and define a winner
// calculate sum of votes

const candidates = [
  {
    id: 1,
    name: 'Viktar',
    votes: 370,
  },
  {
    id: 2,
    name: 'Valeriy',
    votes: 240,
  },
  {
    id: 3,
    name: 'Alexander',
    votes: 3,
    modifyer: 150,
  },
  {
    id: 4,
    name: 'Svetlana',
    votes: 290,
    modifyer: 0.2,
  },
];

function electionsDefiner(candidates) {
  // const winner =  ...
  // const votesSum = ...

  return {
    winner,
    votesSum,
  };
}
