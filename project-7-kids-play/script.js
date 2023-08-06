const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const textEl = document.getElementById("text");
const inputEl = document.getElementById("input1");
const btnEl = document.getElementById("btn");

/// GENERATING RANDOM TWO NUMBERS 
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
// INJECTING IN LIVE PAGE
textEl.innerText = `What is ${num1} multiply by ${num2} ?`;

// VALIDATING ANSWER
const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

// ADDING EVENT LISTENER TO BTN AND GETTING INPUT IN NUMBER NOT STRING

btnEl.addEventListener("submit", () => {
    const userAns = +inputEl.Value;
    if(score === correctAns){
        score++;
        console.log(score);
    }
    else{
        score--;
        console.log(score);
    };
});

function uodatelocalstore (){
    localStorage.setItem("score", JSON.stringify(score));
};
