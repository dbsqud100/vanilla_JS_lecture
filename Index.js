alert('Im Working Im JS Im Beautiful Im worth it');

// console.log('Im Working Im JS Im Beautiful Im worth it');

//variable = 변수
//좋지 않은 변수
// a = 221
// b = a-5
// console.log(b)

//let을 사용하여 변수 초기화 
// let a = 221;
// let b = a-5;
// console.log(b);

//const를 사용하여 변수 초기화
// const a = 221;
// let b = a-5;
// //a = 5; //const는 상수 즉 고정값이기 때문에 다른 값을 대입하면 에러가 된다.
// console.log(b, a);

//var를 사용하여 변수 초기화(var도 let과 같이 값을 변경시킬 수 있다.)
// var a = 221;
// var b = a-5;
// a = 5;
// console.log(b, a);

//String
//const what = Cha;
// const what = "Cha";
// console.log(what);

//Boolean
// const wat1 = false;
// const wat2 = true;

//Number
// const wat = 666;

//Float (소수점)
// const wat = 55.1;

//Array
//아래와 같이 선언하여 출력하는 것도 가능하지만 효율적이지 못하다.
// const mon = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";
// console.log(mon, tue, wed, thu, fri);

//Array는 []이다.
//배열을 사용하면 더 간단하고 효율적으로 코드를 짤 수 있다.
// const dayOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
// console.log(dayOfWeek);
//배열에서 특정한 값만을 출력하는 방법 배열은 0부터 시작한다는 것을 기억
// console.log(dayOfWeek[2]);

//Object {}
//Object안에는 Array를 선언 할 수도 있고 Array안에 다시 Object를 
//선언할 수 있다.
// const Object = {name:"Cha",age:27,gender:"Male",
// favMovies:["kimetunoyaiba","tennkinoko"],
// favFood:[{name:"kimchi", fatty:false},{name:"pizza", fatty:true}]};
// console.log(Object);
//나이만을 출력시키고 싶을 때
// console.log(Object.age);

// console.log(Object.gender);
// Object.gender = "Female";
// console.log(Object.gender);

//JS에서 함수를 쓰는 방법
// function sayHello(){
//  console.log('Hello!');
// }
// sayHello();
// console.log("Hi!");

//함수에 인자를 추가하기
// function sayHello(name){
//     console.log('Hello!', name);
// }
// sayHello("Cha");

//백틱(``)을 사용하기
// function sayHello(name, age){
//     console.log(`Hello ${name} you are ${age} years old`);
//     return `Hello ${name} you are ${age} years old`;
// }

// sayHello("Cha", 15);

//greetCha는 sayHello 함수의 리턴 값처럼 다루어진다.
// const greetCha = sayHello("Cha", 15);
// console.log(greetCha);

//Object안에 함수 만들기
const calculator = {
 plus: function(a,b){
    return a + b;
 }
}

const plus = calculator.plus(5,5);
console.log(plus);

