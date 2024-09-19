// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array (1, 2, 3, 4)
console.log(myArr[2]);

// Array Methods

// myArr.push(6)     Push last ma umerva mate
// myArr.pop()       pop last ni value remove krva mate
// myArr.unshift(9)  Starting ma value add krva mate
// myArr.shift()     Starting ni value remove krva mate

console.log(myArr);

// console.log(myArr.includes(9)); Array ma  value sodhva matee => True / False
// console.log(myArr.indexOf(3));     Array ma value sodhva mate   => -1 (false)/3(True)(sacho hoy to value show thay)

// const newArr = myArr.join()  myarray ne object mathi string ma  covert krva join no use thay che 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);


// slice , Splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)  // Copy karine ape == Ans => (1,2)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1, 3) // cut karine ape = Ans => (1,2,3)
console.log("C",myArr);
console.log(myn2);















