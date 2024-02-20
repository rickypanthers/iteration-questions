const people_objs = [
  {
    name: 'Ricky',
    age: 29,
  },
  {
    name: 'Steven',
    age: 47,
  },
  {
    name: 'Lee',
    age: 12,
  },
  {
    name: 'Stan',
    age: 33,
  },
];

const ageCriteriaFilteredPeople = (age) =>
  people_objs.filter((ppl) => ppl.age > age).map((res) => res.name);

console.log(ageCriteriaFilteredPeople(30));
