const students_arr = [
  {
    name: 'Suman',
    age: 29,
    grade: 'B',
  },
  {
    name: 'Sara',
    age: 20,
    grade: 'A',
  },
  {
    name: 'Sam',
    age: 23,
    grade: 'C',
  },
];
students_arr.sort((a, b) =>
  a.grade > b.grade ? -1 : b.grade > a.grade ? 1 : 0
);
console.log(students_arr);
let result = students_arr
  .slice()
  .sort((a, b) => (a.age > b.age ? 1 : b.age > a.age ? -1 : 0));
console.log(result);
