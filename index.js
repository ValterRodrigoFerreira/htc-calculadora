const $buttonsNumbers = document.querySelectorAll(
  ".calculator__buttons--numbers"
);
const $buttonsOperators = document.querySelectorAll(
  ".calculator__buttons--operator"
);
const $buttonResult = document.querySelector(".calculator__buttons--result");

const $buttonClear = document.querySelector(".calculator__buttons--clear");

const $inpuntDisplayCalculator = document.querySelector(
  ".calculator__display-input"
);

const $result = document.querySelector(".calculator__display-result");

let calculate = "";

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inpuntDisplayCalculator.value = calculate.replaceAll(" ", "");
  });
});

$buttonsOperators.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inpuntDisplayCalculator.value = calculate.replaceAll(" ", "");
  });
});

$buttonResult.addEventListener("click", function () {
  $result.textContent = eval(calculate);
});

/*$buttonClear.addEventListener("click", function() {
  $buttonResult.textContent = cl })*/

/*const $buttonsNumber0 = document.querySelector(".calculator__buttons--number0");
const $buttonsNumber1 = document.querySelector(".calculator__buttons--number1");
const $buttonsNumber2 = document.querySelector(".calculator__buttons--number2");
const $buttonsNumber3 = document.querySelector(".calculator__buttons--number3");
const $buttonsNumber4 = document.querySelector(".calculator__buttons--number4");
const $buttonsNumber5 = document.querySelector(".calculator__buttons--number5");
const $buttonsNumber6 = document.querySelector(".calculator__buttons--number6");
const $buttonsNumber7 = document.querySelector(".calculator__buttons--number7");
const $buttonsNumber8 = document.querySelector(".calculator__buttons--number8");
const $buttonsNumber9 = document.querySelector(".calculator__buttons--number9");

const $inpuntDisplayCalculator = document.querySelector(
  ".calculator__display-input"
);

const $boardListNumbers = document.querySelectorAll(
  ".calculator__buttons--button"
);

let calculate = "";
$inpuntDisplayCalculator.value = calculate;

$buttonsNumber0.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $boardListNumbers.textContent;
});

$buttonsNumber1.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber1.textContent;
});

$buttonsNumber2.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber2.textContent;
});

$buttonsNumber3.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber3.textContent;
});

$buttonsNumber4.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber4.textContent;
});

$buttonsNumber5.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber5.textContent;
});

$buttonsNumber6.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber6.textContent;
});

$buttonsNumber7.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber7.textContent;
});

$buttonsNumber8.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber8.textContent;
});

$buttonsNumber9.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = $buttonsNumber9.textContent;
});*/
