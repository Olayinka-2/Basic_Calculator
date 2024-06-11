let firstNum = null;
let operator = null;
let secondNum = null;
let currentNumber = "";
let result = document.querySelector("p");

function operate(firstNum, operator, secondNum) {
   let output;
   switch(operator) {
      case "+":
         output = firstNum + secondNum;
         break;
      case "-":
         output = firstNum - secondNum;
         break;
      case "/":
         output = firstNum / secondNum;
         break;
      case "X":
         output = firstNum * secondNum;
         break;
   }
   return output;
}

let buttons = document.querySelector(".container_buttons");
buttons.addEventListener("click", (event) => {
   let target = event.target;

   if(target.classList.contains("number") && operator == null) {
      currentNumber += target.textContent;
      result.textContent = currentNumber;
      firstNum = parseFloat(result.textContent);
   } 
else if(target.classList.contains("operator")) {
      if(currentNumber.length > 0) {
         currentNumber = "";
         operator = target.textContent.toString();
      }
   } else if(target.classList.contains("clear")) {
      currentNumber = "";
      firstNum = null;
      operator = null;
      result.textContent = "";
   } else if(target.classList.contains("number") && firstNum !== null && operator !== null) {
         currentNumber += target.textContent;
         result.textContent = currentNumber
         secondNum = parseFloat(result.textContent);
   }
else if(target.classList.contains("equals")) {
      if(firstNum !== null && operator !== null && secondNum !== null) {
         currentNumber = operate(firstNum, operator, secondNum);
         result.textContent = parseFloat(currentNumber);
         firstNum = parseFloat(result.textContent);
      }
   }
});

