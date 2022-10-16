// //задание 1

let a = prompt('enter number');

if (a == 1) {
    console.log('hi!');
} else {
  console.log('Пароль введён неверно');
}

// //задание 2

let b = prompt('number');

if(b > 0) {
    console.log(`число ${b} больше 0`);
} else {
    console.log(`число ${b} меньше 0`);
}

// //задание 3

let m = 40;
let n = 'pon';

if (m > 50) {
    console.log(`${n} большое`);
} else {
    console.log(`${n} маленькое`);
}

// //задание 5

let i = 45;

while(i<68) {
    console.log(i);
    i++;
}

// //задание 7

for(let i=45; i<68; i++) {
    console.log(i);
}

//задание 4

let c =prompt(`number`);

if(c>0 && c<4) {
    console.log(`Значение ${c} известно`);
} else if(c>3) {
    console.log(`значение ${c} неизвестно`);
}

// //задание 8

Hello1(JavaScript);

function Hello1(hi) {
    console.log(`Привет, ${hi}`);
}

