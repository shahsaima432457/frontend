const myArray = [0, 1, 3, 4, 5, 6]
console.log(myArray[0]);


const arrAy = ["rohit", "naagraj"]
console.log(arrAy[1]);


const rayS = new Array(2, 4, 5)
console.log(rayS[2]);

myArray.push(7);
myArray.pop()


myArray.unshift(4);
myArray.shift();
console.log(myArray);

console.log(myArray.includes(3));
console.log(myArray.indexOf(3));


const newArrayy = myArray.join()
console.log(newArrayy);
console.log(typeof newArrayy);


console.log("A", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1);

console.log("B", myArray);
const myn2 = myArray.splice(1, 3);
console.log("c", myArray);
console.log(myn2);







//