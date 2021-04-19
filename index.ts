const sayHi = (name:string, age:number, gneder:string): void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gneder}`);
};

sayHi( "Nicolas", 44, "male");

    // Cannot reduclare block-scoped variable 'name' 해결법으로 export{} 입력(버그 중 하나라고 예상)
    export{};