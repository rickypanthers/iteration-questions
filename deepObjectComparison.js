let obj1 = {
  name: 'Suman',
  age: 29,
  address: {
    line1: 'India',
    line2: 'Noida',
  },
};

let obj2 = {
  name: 'Suman',
  age: 29,
  address: {
    line1: 'India',
    line2: 'Noida',
  },
};

const deepComparison = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let keys of keys1) {
    const val1 = obj1[keys];
    const val2 = obj2[keys];

    const areObjects = isObject(val1) && isObject(val2);

    if (
      (areObjects && !deepComparison(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (obj) => typeof obj === 'object' && obj !== null;

console.log(Object.is(obj1, obj2)); //Shallow comparison
console.log(deepComparison(obj1, obj2)); //deep comparison
