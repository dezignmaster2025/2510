// Global Scope
let test = 1;


// if() {
//     const test3 = 3;
//     // Block scope
// }

// for () {
// // Block scope
// }
const calculator = (num1, num2, op) => {
    const test4 = 1;
    const addNumbers = (num1, num2) => {
        // Block/function scope
        const test2 = 2;
        return num1 + num2 + test // test = 1;
    }

    const subtractNumbers = (num1, num2)=>{
        return num1 - num2 - test2; // Error 
    }

    const multiplyNumbers = (num1, num2)=>{
        return num1 * num2 * test3; // Error
    }

    function divideNumbers(num1, num2) {
        return num1 / num2;
    }
    switch (op) {
        case 'ADD':
            return addNumbers(num1, num2);
        case 'SUB':
            return subtractNumbers(num1, num2);
        case 'MUL':
            return multiplyNumbers(num1,num2);    
        default: 
            return divideNumbers(num1, num2);
    }
    // if(op === "ADD") {
    //     return addNumbers(num1, num2);
    // } else if (op === 'SUB'){
    //     return subtractNumbers(num1, num2);
    // } else if (op === "MUL"){
    //     return multiplyNumbers(num1,num2);
    // } else {
    //     return divideNumbers(num1, num2);
    // }
    
}
calculator(10, 5, "ADD"); // 15
calculator(10, 2, "SUB"); // 8 
calculator(10, 2, "MUL"); // 20
calculator(10, 2, "DIV"); // 5

// addNumbers(5, 10); // 15
// subtractNumbers(10, 2);  // 8
// multiplyNumbers(20, 5); // undefined
// divideNumbers(100, 5); // 50


const obj = {
    addNumbers: (num1, num2)=>num1 + num2,
    subNumbers: (num1, num2)=> num1 - num2
}

obj.addNumbers(10, 10) // 20

const dom = {
    html: {
        head: {
            meta: {},
            title: {
                innerHtml: 'Demo 1 - this is a demo page'
            }
        },
        body: {
            header: {},
            nav: {},
            main: {},
            footer: {}
        }
    }
}
dom.html.body

const nav = document.getElementById('nav') // <div id="nav"></div>

nav.innerHTML = "Demo 5"; // <div id="nav">Demo 5</div>
nav.style.color = "red"; // <div id="nav" style="color: red;">Demo 5</div>

nav.style.display = "none"

nav.addEventListener('click', ()=>{
    nav.style.color = "red";
})