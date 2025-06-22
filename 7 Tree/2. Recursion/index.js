// EX: 1
function countDow(number) {
  if (number === 0) {
    console.log("An finaly the stopping point");
    return;
  }
  console.log(number);
  countDow(number - 1);
}

countDow(5);

// EX: 2

function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5));

function factorial1(number) {
    return number === 0 ? 1 : number * factorial1(number - 1)
}

console.log(factorial(4))