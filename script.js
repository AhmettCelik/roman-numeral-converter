const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const numberInput = document.getElementById("number");

const romanArr = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function convertToRoman(num) {
  for (var i = 0; i < romanArr.length; i++) {
    if (num >= romanArr[i][0]) {
      return romanArr[i][1] + convertToRoman(num - romanArr[i][0]);
    }
  }
  return "";
}

function handleConvert() {
  const number = parseInt(numberInput.value);

  if (isNaN(number)) {
    output.innerHTML = "Please enter a valid number";
    return;
  } else if (number > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  } else if (number < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  }

  output.innerHTML = convertToRoman(number);
}

convertBtn.addEventListener("click", handleConvert);
numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleConvert();
  }
});
