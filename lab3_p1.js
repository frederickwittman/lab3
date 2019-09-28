// Frederick Wittman
// Lars Kotthoff
// Rajiv Khadka
// lab3_p1
// COSC 3015
// 09/27/19

function divideAndConquerSum (a) {

  if (a.constructor == Array) {

    if (a.length == 0) {
      return 0;
    }

    if (a.length == 1) {
      return a[0];
    }

    else {
      return divideAndConquerSum(a.splice(0, 1)) + divideAndConquerSum(a.splice(0, 1)) + divideAndConquerSum(a.splice(0));
    }
  }

  else {
  console.log("Function argument must be an array.");
  }
} 

console.log(divideAndConquerSum(1));
console.log(divideAndConquerSum([0, 1, 2, 3]));
console.log(divideAndConquerSum([0, 1, 2, 3, 4, 5]));
console.log(divideAndConquerSum([0, 1, 2, 3, 4, 5, 6]));
