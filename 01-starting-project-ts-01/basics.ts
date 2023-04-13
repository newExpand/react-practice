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
