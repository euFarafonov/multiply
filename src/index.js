module.exports = function multiply(first, second) {
  let firstArr = first.split("").reverse();
  let secondArr = second.split("").reverse();
  let resArr = [];
  
  for (let i = 0, firstLen = firstArr.length; i < firstLen; i++) {
    for (let j = 0, secondLen = secondArr.length; j < secondLen; j++) {
      let ind = i + j;
      let numb = Number(firstArr[i]) * Number(secondArr[j]);

      writeDataToArray(ind, numb);
    }
  }

  function writeDataToArray(ind, numb) {
    if (resArr[ind] != undefined) {
      numb += resArr[ind];
    }

    if (numb > 9) {
      let balance = numb % 10;
      let base = (numb - balance) / 10;
      resArr[ind] = balance;
      writeDataToArray(ind + 1, base);
    } else {
      resArr[ind] = numb;
    }
  }

  return resArr.reverse().join("");
}
