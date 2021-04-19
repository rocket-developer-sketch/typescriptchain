const sayHi = (name:string, age:number, gneder:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gneder}`;
};

console.log(sayHi( "Nicolas", 44, "male"));

    // Cannot reduclare block-scoped variable 'name' 해결법으로 export{} 입력(버그 중 하나라고 예상)
    export{};
    