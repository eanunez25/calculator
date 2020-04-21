const nums  = document.querySelectorAll('button');
nums.forEach(num => num.addEventListener("mouseup", e => {
    onScreenNum(e);
}));

const inputScreen = document.querySelector(".input");
const outputScreen = document.querySelector(".output");
onScreenNum = x => {
    window.input = x.currentTarget.innerHTML;
    if (input == "+/-") {
        inputScreen.innerHTML += "";
    } else if (input == "C") {
        inputScreen.innerHTML = "";
        outputScreen.innerHTML = "";
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
    const inputArray = inputBox.split(/[/x+-]+/);
    const array = inputBox.split("");
    const operator = array.filter(op => {
        return (op == "/" || op == "x" || op == "+" || op == "-")
    })
    if (operator == "/") {
        const quotient = inputArray[0] / inputArray[1];
        outputScreen.innerHTML = lessDecimals(quotient);
        inputScreen.innerHTML = quotient;
    } else if (operator == "x") {
        const product = inputArray[0] * inputArray[1];
        outputScreen.innerHTML = lessDecimals(product);
        inputScreen.innerHTML = product;
    } else if (operator == "+") {
        const sum = inputArray[0] + inputArray[1];
        outputScreen.innerHTML = lessDecimals(sum);
        inputScreen.innerHTML = sum;
    } else {
        const difference = inputArray[0] - inputArray[1];
        outputScreen.innerHTML = lessDecimals(difference);
        inputScreen.innerHTML = difference;
    }
}

delLastEntry = () => {
    const inputBox = document.querySelector(".input").innerHTML;
    const inputArray = inputBox.split("");
    inputArray.pop()
    const returnString = inputArray.join("");
    inputScreen.innerHTML = returnString;
    outputScreen.innerHTML = "";
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
    if (opCounter < 2) {
        inputScreen.innerHTML += input;
    } else {
        inputScreen.innerHTML += "";
    }
}

lessDecimals = (int) => {
    if (int.toString().split(".")[1] > 4) {
        int = int.toFixed(4)
        return int
    }
}

