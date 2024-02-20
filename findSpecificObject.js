const booksObj = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
  },
  {
    title: 'Famous Five',
    author: 'Enid Blyton',
  },
  {
    title: '2 States',
    author: 'Chetan Bhagat',
  },
];

const findBook = (target) =>
  booksObj.find((book) => book.title.toUpperCase() === target.toUpperCase());

console.log(findBook('famous'));
