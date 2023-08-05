//***********Reverse Word */
function reverseWords(str) {
  var toArr = str.split(" ");
  var Arr = [];
  toArr.forEach((item) => {
    Arr.push(item.split("").reverse().join(""));
  });
  return Arr.join(" ");
  // Go for it
}

//**********Who Ate the cookies */
function cookie(x) {
  var name1 = "Zach!";
  var name2 = "Monica!";
  var name3 = "the dog!";
  var response = "Who ate the last cookie? It was ";

  if (typeof x === "string") {
    return response + name1;
  } else if (typeof x === "number") {
    return response + name2;
  } else {
    return response + name3;
  }
}

//*********To upperCase */
function makeUpperCase(str) {
  var convert = str.toUpperCase();
  return convert;
  // Code here
}

//********* Valid PIN */
function validatePIN(pin) {
  // Check if PIN is exactly 4 or 6 digits long and contains only digits
  if (/^(\d{4}|\d{6})$/.test(pin)) {
    return true;
  } else {
    return false;
  }
}
//********* Persistent */
function persistence(num) {
  let count = 0;
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    count++;
  }
  return count;
}
