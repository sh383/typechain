interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Hoon",
  age: 22,
  gender: "male",
};

// ? 를 넣어서 parameter 가 선택적이라고 알려줄 수 있다. const sayHi = (name, age, gender?)
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you're ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));
// 안하면 name 을 정의할 수 없다
export {};
