let firstNum = null;
let operator = null;
let secondNum = null;
let currentNumber = "";
let result = document.querySelector("p");
let answer = "";

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
         if(secondNum == 0) {
            output = "Can't be divided by 0";
         } else {
            output = firstNum / secondNum;
         }
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

   if(target.classList.contains("number")) {
      result.style.color= "";
      if(operator == null) {
         currentNumber += target.textContent;
         result.textContent = currentNumber;
         firstNum = parseFloat(result.textContent);
      } else if(firstNum !== null && operator !== null) {
         currentNumber += target.textContent;
         result.textContent = currentNumber
         secondNum = parseFloat(result.textContent);
      }
   } 
else if(target.classList.contains("operator")) {
      if(answer !== "" & firstNum == null) {
         firstNum = answer
      }
      currentNumber = "";
      operator = target.textContent.toString();
   } else if(target.classList.contains("clear")) {
      currentNumber = "";
      firstNum = null;
      operator = null;
      answer ="";
      result.textContent = "";
   } else if(target.classList.contains("equals")) {
      if(firstNum !== null && operator !== null && secondNum !== null) {
         currentNumber = operate(firstNum, operator, secondNum);
         if(!Number.isFinite(currentNumber)) {
            result.textContent = "Arithmetic Error";
            result.style.color= "red";
         } else {
            result.textContent = parseFloat(currentNumber);
            answer = parseFloat(result.textContent);
         }
         firstNum = null;
         secondNum = null;
         operator = null;
         currentNumber = "";
      }
   }
});