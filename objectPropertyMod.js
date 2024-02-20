const obj1 = {
  username: 'rickypanthers',
  email: 'rickypanthers@gmail.com',
  age: 29,
};

function addProp(obj, propertyName, val) {
  obj[propertyName] = val;
  return obj;
}

console.log(addProp(obj1, 'isActive', true));
