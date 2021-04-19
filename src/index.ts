// 인터페이스는 javascript로 컴파일 되지 않음.
// 그렇기 때문에 class 사용
// 속성 선언, 속성들이 가진 권한 정해줘야 함.
// Java의 접근제어자 같이 사용
class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

// typescript가 person 이 Human 인터페이스와 같은 형태인지 체크하기 때문에
// object로 argument 전달 가능
const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(lynn));

    // Cannot reduclare block-scoped variable 'name' 해결법으로 export{} 입력(버그 중 하나라고 예상)
    export{};
    