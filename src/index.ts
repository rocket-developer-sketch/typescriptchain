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
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi( person));

    // Cannot reduclare block-scoped variable 'name' 해결법으로 export{} 입력(버그 중 하나라고 예상)
    export{};
    