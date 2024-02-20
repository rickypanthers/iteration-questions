const arr1 = ['Suman', 'Raghav', 'Oin', 'Raja'];

let max_length = arr1.sort((a, b) => b.length - a.length)[0].length;
console.log(arr1.find((a) => a.length === max_length));
