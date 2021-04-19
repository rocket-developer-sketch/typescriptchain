const name = "Nicolas",
    age = 24,
    gender = "male";


const sayHi = (name, age, gneder?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age);

    // Cannot reduclare block-scoped variable 'name' 해결법으로 export{} 입력(버그 중 하나라고 예상)
    export{};