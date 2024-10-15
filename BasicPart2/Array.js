
const myArray = [0,1,2,3,4,5];
console.log(myArray);

// Array Method

// myArray.push(6);
// myArray.push(7);
// myArray.pop();
//  myArray.unshift(9);
//  myArray.shift();
//  const newarray = myArray.join();
// console.log(newarray);
const myslice = myArray.slice(1,3);
console.log("slice",myslice);
console.log("afterslice use full array print", myArray)

const mysplice = myArray.splice(1,3);
console.log("splice",mysplice);
console.log("aftersplice use full array print", myArray)



