const nums  = document.querySelectorAll('button');
nums.forEach(num => num.addEventListener("mouseup", e => {
    onScreenNum(e);
}));

const inputScreen = document.querySelector(".input");
onScreenNum = x => {
    window.input = x.currentTarget.innerHTML;
    if (input == "+/-") {
        inputScreen.innerHTML += "";
    } else if (input == "C") {
        inputScreen.innerHTML = "";
    } else if (input == "del") {
        delLastEntry();
    } else if (input == "=") {
        getNumInput();
    }  else {
        onlyOneOp();
    }
}

getNumInput = () => {
    const inputBox = document.querySelector(".input").innerHTML;
    const inputArray = inputBox.split(/\D+/);
}

delLastEntry = () => {
    const inputBox = document.querySelector(".input").innerHTML;
    const inputArray = inputBox.split("");
    inputArray.pop()
    const returnString = inputArray.join("");
    inputScreen.innerHTML = returnString;
}

onlyOneOp = () => {
    const inputBox = document.querySelector(".input").innerHTML;
    const arraytoCountOp = inputBox.split("");
    let opCounter = 0;
    for (let i = 0; i < arraytoCountOp.length; i++) {
        if (arraytoCountOp[i] == "/" || arraytoCountOp[i] == "x" || arraytoCountOp[i] == "+" || arraytoCountOp[i] == "-") {
            opCounter++;
        }
    }
    if (opCounter > 1) {
        inputScreen.innerHTML += "";
    } else {
        inputScreen.innerHTML += input;
    }
}


