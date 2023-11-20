console.log("hello, world");

let age = 26;
console.log(age);
age = 30;
console.log(age);

const weekDays = 7, dateOfBirth = "10/02/1990";

//a comment

/*multi line comment*/

//المعاملات الحسابية
let result = 2 + 5;
result = 4 - 10;
result = 10 % 3; //متبقي القسمة

result = 6 == 3; //مقارنة
result = 8 != 7;
result = 3 > 2;
result = 7 <= 3; // ناتج = false
result = 1 === 1; //مقارنة قيمة ونوع البيانات
result = 1 !== "1"; //ناتج = true

let number = 5;
number = number + 1;   
number = number - 1;
number++; // increment
number--; // decrement

number = 2;
result = number++ + 4; // postfix
console.log(result);
console.log(number);

number = 2;
result = ++number + 4; // prefix
console.log(result);
console.log(number);

//logical operators
let first = true, second = false;
let andResult = first && second; // false
let orResult = first || seocnd;  // true
let notResult = !first // false
console.log(andResult);
console.log(orResult);
console.log("notResult:", notResult);

let name = 'ahmed';
let age0 = 30;
console.log(typeof name); //string
console.log(typeof age0); //number

let language = 'javascript';
let message = `welcome to ${language}`; //``backtick
console.log(message);
console.log(`The sum is ${1 + 2}`);

let name0 = 'Nasser';
console.log(name0.length);
console.log('Saudi'.length);

let password = '_@2#bcE?';
if(password.length >= 8){
   console.log("The password is accepted") ;
}

let language0 = 'JavaScript';
console.log(language[2]); //v

let name1 = 'Mishal';
name1[0] = 'R'; //للقراءة فقط، أي لايمكنك تحديث قيمة عنصر معين داخل النص
console.log(name1);

console.log ( 'Welcome to ' + 'JavaScript');

let title = 'Mr.';
title += 'Ali'; // title = title + 'Ali';
console.log(title);

//escape characters
console.log('A\tB\tC\tD\tE'); // \t 
console.log('A\nB\nC\nD\nE'); // \n 
console.log('It\'s such an interesting language'); // \'
console.log("Welcome to \"JavaScript\""); // \"
console.log('The \\ character is called backslash.');

//arrays
let colors = ["red", "green", "blue"];
myColors = [];
console.log(colors);
console.log(colors[0]); //index
let colors0 = ['red', 'green', 'blue'];
colors0[1] = 'black'; //تحديث قيم المصفوفة
console.log(colors0.length);
console.log(colors.includes('green')); //true

let result0 = colors.includes('black');
console.log(result0); //false
colors.push('black');
console.log(colors); //['red', 'green', 'blue', 'black']

colors.pop();
console.log(colors); //['red', 'green']
let blueColor = colors.pop();
console.log(blueColor); //blue

let colors1 = ['red', 'green', 'blue'];
colors1.unshift('black');
console.log(colors1); //['black', 'red', 'green', 'blue']
colors1.unshift('white');
console.log(colors1); //['white', 'black', 'red', 'green', 'blue']

let colors2 = ['red', 'green', 'blue'];
colors2.shift();
console.log(colors2); //['green', 'blue']
colors.shift();
console.log(colors); // ['blue']

let colors3 = ['red', 'green', 'blue'];
const redColor = colors3.shift();
console.log(colors3); //['green', 'blue']
console.log(redColor); //red

let color = 'black';
console.log(Array.isArray(color)) //false
console.log(Array.isArray(colors3)) //true

const values = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; //2d array
console.log(values[2][2]);

let message0 = 'welcome to javascript';
let result1 = message.split(' ');
console.log(result1);

let message1 = ['welcome', 'to', 'javascript'];
let result2 = message1.join('-@-');
console.log(result2);

//conditions
let age1 = 11;
if (age1 < 12) {
console.log('Sorry, you are not old enough to play this game.');
}
else{
    console.log("Welcome to the game");  
    };

    let number0 = 1;
    if (number0 > 0) {
    console.log('+');
    }else if (number0 < 0) {
    console.log('-');
    }else {
    console.log('Zero');
    }

const colors4 = ['red', 'green', 'blue'];
let colorNumber = 3;

switch(colorNumber){
    case 1:
        console.log(colors4[0]);
        break;
    case 2:
        console.log(colors4[1]);
        break;
    case 3:
        console.log(colors4[2]);
        break;
    case 4:
    case 5:
    case 6:
        console.log('black');
        break;
    default:
        console.log('white');
        break;
}

//loops
for (let i = 5; i > 0; i--) {
    console.log(i);
};

let number1 = 5;
while (number1 > 0) {
    console.log(number1);
    number1--;
};

for (let index = 1; index <= 10; index++) {
    if(index % 2 == 0){
        console.log("Next");
        continue;
    }
    console.log(index);
};

for(let index = 1; index <= 10; index++){
    if(index % 2 == 0){
        console.log("Stop");
        break;
    }
    console.log(index);
};

const colors5 = ['red', 'green', 'blue'];
for(let i = 0; i < colors5.length; i++){
    console.log(colors5[i]);
};

for(let color of colors5){
    console.log(color);
};

const message2 = 'welcome to javascript';
for(let character of message2){
    console.log(character);
};

let i = 0;
do{
    console.log(colors5[i]);
    i++
}while(i < colors.length);

//functions
function printMessage() {
    console.log("Welcome to JavaScript");
};
printMessage();

function printNumbers0(no) {
    for(let i = 1; i<=no; i++){
        console.log(i);
    }
}
printNumbers0(2);
printNumbers0(5);

function add (first, second){
    console.log(first + second)
}

add(2, 7);

function add0 (first0, second0){
    if(first0 = 1000){
        return;
    }
    let result3 = first0 + second0;
    return result3;
}
let value = add(1, 7);
console.log(value);
printNumbers0(add(5, 6));
