function multiply(arr) {
  arr.sort((a, b) => b - a);

  let max = 0;
  let Combination = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        const num1 = arr[i] + "" + arr[j] + "";
        const num2 =
          arr.filter((_, index) => index !== i && index !== j).join("") + "";

        const answer = num1 * num2;

        if (answer > max) {
          max = answer;
          Combination = [+num1, +num2];
        }
      }
    }
  }
  return Combination;
}

const result = multiply([1, 3, 5, 7, 9]);
console.log(result);
