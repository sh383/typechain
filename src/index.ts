class Human {
  //typescript 에서는 클래스가 어떤 속성을 가지는지 선언해줘야함
  public name: string;
  // 에러. Property 'age' is private and only accessible within class 'Human'.
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    // class 로부터 object 를 만들 때 마다 실행
    this.name = name; //class 의 이름은 constructor 의 이름과 같다고 선언
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female");

// ? 를 넣어서 parameter 가 선택적이라고 알려줄 수 있다. const sayHi = (name, age, gender?)
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you're ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));
/*
/*
//interface 와 class 선언 차이
//interface 는 ts 측면에서 더 안전
// react, node, express 등등에서는 class 사용해야함
*
*/

interface Human2 {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Hoon",
  age: 22,
  gender: "male",
};
const sayHi2 = (person: Human2): string => {
  return `Hello ${person.name}, you're ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi2(person));
// 안하면 name 을 정의할 수 없다
export {};
