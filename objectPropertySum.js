const expense_obj = {
  food: 3000,
  rent: 15000,
  shopping: 2000,
  entertainment: 1000,
};

const calcTotSum = (obj) => {
  let total = 0;
  for (let i in obj) {
    total += obj[i];
  }
  return total;
};

console.log(calcTotSum(expense_obj));
