// ? 를 넣어서 parameter 가 선택적이라고 알려줄 수 있다. const sayHi = (name, age, gender?)
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you're ${age}, you are a ${gender}!`;
};

console.log(sayHi("Hoon", 24, "male"));
// 안하면 name 을 정의할 수 없다
export {};
