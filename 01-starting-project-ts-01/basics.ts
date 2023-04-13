let age: number = 24;

age = 12;

let userName: string;

userName = "민수";

let isInstructor: boolean;

isInstructor = true;

// 배열에 타입주기

let hobbies: string[];

hobbies = ["축구", "농구"];

// 객체에 타입주기

let person: {
    name: string;
    age: number;
};

person = {
    name: "민수",
    age: 32,
};

// person = {
//     isEmployee: true
// }

// 배열 안의 객체에 타입주기

let people: {
    name: string;
    age: number;
}[];

// 타입 추론하기

let course = "리액트 - 완벽 부수기";

// course = 123; 에러 발생함. 타입 추론으로 :string을 표시하지 않아도 타입스크립트 자체에서 추론해서 course변수는 string이라 명시해줌

// 유니온 타입

let course2: string | number = "타입스크립트 뿌시깅"; // 타입 추론이 아닌 다른 타입에 대한 명시를 한다면 string, number를 예제와 같이 표시하면 됨

course2 = 24;

let userName2: string | string[]; // 이처럼 유니온 타입을 활용해 문자나 문자열 배열이 올 수 있게 할 수도 있음.

// Type Aliases(타입 별칭) 이해하기

// typescript만의 기능임
type Person = {
    name: string;
    age: number;
};

// 예시1
let person2: Person;

// 예시2
let people2: Person[];
