const fruitsObj = {
  orange: 22,
  mango: 10,
  apple: 30,
  banana: 45,
};

const findFruits = (threshold) => {
  let filtered_fruits = [];
  for (let i in fruitsObj) {
    if (fruitsObj[i] < threshold) {
      continue;
    }
    filtered_fruits.push(i);
  }
  return filtered_fruits;
};

console.log(findFruits(20));
