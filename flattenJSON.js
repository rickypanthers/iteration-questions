const nested_obj = {
  one: 1,
  two: {
    three: 3,
  },
  four: {
    five: 5,
    six: {
      seven: 7,
    },
    eight: 8,
  },
  nine: 9,
};

const output = {
  one: 1,
  'two.three': 3,
  'four.five': 5,
  'four.six.seven': 7,
  'four.eight': 8,
  nine: 9,
};

const flattenJSON = (obj = {}, resp = {}, keys = '') => {
  let object_keys = Object.keys(obj);
  for (let key of object_keys) {
    if (isObject(obj[key])) {
      flattenJSON(obj[key], resp, `${keys}${key}.`);
    } else {
      resp[keys + key] = obj[key];
    }
  }
  return resp;
};

const isObject = (obj) => obj !== null && typeof obj === 'object';

console.log(flattenJSON(nested_obj));
