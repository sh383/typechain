"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Hoon", age = 24, gender = "male";
// 물음표를 넣어서 parameter 가 선택적이라고 알려줄 수 있다.
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you're ${age}, you are a ${gender}`);
};
sayHi(name, age);
//# sourceMappingURL=index.js.map