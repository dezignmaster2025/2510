let var1 = 0;
const var2 = 1;

const var3 = true // false
const var4 = [1, 'str', true]
const var5 = {
    value: 1,
    value2: 'str',
    value3: false
}

var4[0] // 1
var5['value2'] // 'str'
var5.value3 // false

var1 == var2 // true
var1 === var2 // false

if (var1 > var2 || var1 < var3 ) {
    console.log('var2', true)
} else if (var1 === var3){
    console.log('var3', true)
} else {
    console.log(false)
}

for (let i = 0; i < var2; i++){
    console.log('Hello there....')
}

while (var1 < var2) {
    console.log('Hello there....')
    var1++;
}

function addNumbers(num, num1){
    return num + num1;
}

const myFunc = (num, num2)=>{
    const total = num+num2;
    return total;
}

console.log(addNumbers(1, '1'))