const $buttonsNumbers = document.querySelectorAll(
  ".calculator__buttons--numbers"
);
const $buttonsOperators = document.querySelectorAll(
  ".calculator__buttons--operator"
);
const $buttonResult = document.querySelector(".calculator__buttons--result");

const $buttonClean = document.querySelector(".calculator__buttons--clean");

const $inpuntDisplayCalculator = document.querySelector(
  ".calculator__display-input"
);

const $result = document.querySelector(".calculator__display-result");

const $changeSign = document.querySelector(".calculator__buttons--moreless");

const inverterSinal = "-";

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
  calculate = calculate.replaceAll("x", "*");
  calculate = calculate.replaceAll("÷", "/");
  $result.textContent = eval(calculate);
});

$buttonClean.addEventListener("click", function () {
  $inpuntDisplayCalculator.value = "";
  $result.textContent = "";
  calculate = "";
});

$changeSign.addEventListener("click", function () {
  $inpuntDisplayCalculator.value =
    $inpuntDisplayCalculator.value != "-"
      ? "-" + $inpuntDisplayCalculator.value
      : ($inpuntDisplayCalculator.value = "+");
});
