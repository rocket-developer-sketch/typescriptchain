interface Human {
    name: string;
    age: number;
    gender: string;

}
const person = {
    name : "Nicolas",
    age : 22,
    gender : "male"
    
};

// typescript가 person 이 Human 인터페이스와 같은 형태인지 체크하기 때문에
// object로 argument 전달 가능
const sayHi = (person: Human): string => {
    return `Hello ${name}, you are ${age}, you are a ${gneder}`;
};

console.log(sayHi( person));

    // Cannot reduclare block-scoped variable 'name' 해결법으로 export{} 입력(버그 중 하나라고 예상)
    export{};
    