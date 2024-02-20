const arr1_objs = [
  {
    name: 'Apple',
    price: 80000,
  },
  {
    name: 'HP',
    price: 50000,
  },
  {
    name: 'Dell',
    price: 60000,
  },
];

console.log(arr1_objs.sort((a, b) => a.price - b.price));
