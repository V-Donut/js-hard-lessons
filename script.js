let num = 266219;

let numStr = num.toString();
let result = 1;
for (let i = 0; i < numStr.length; i++) {
  result = result * numStr[i];
}

let degree = result ** 3;
let degreeStr = degree.toString();
console.log(degreeStr.slice(0,2));
