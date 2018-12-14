// you need to create a shell with films
// first of all a user will try to watch films from 'films library'
// if user want a film, which is not exist in 'films' object you need to
// show an alert with apologize and propose to watch any film from the 'stock'
// all films should be taken from the 'shell'
const films = {
  Startrack: { /* info */ },
  Starwars: { /* info */ },
  Superman: { /* info */ },
  'Spider-man': { /* info */ },
  Thor: { /* info */ },
  'Iron man': { /* info */ },
  Hulk: { /* info */ },
};

const stock = {
  Venom: { /* info */ },
  'Captain America': { /* info */ },
  Logan: { /* info */ },
  Deadpool: { /* info */ },
  Aquaman: { /* info */ },
  'Fantastic Four': { /* info */ },
  'X-men': { /* info */ },
};

let shell;

module.exports = {
  films, stock, shell,
};
