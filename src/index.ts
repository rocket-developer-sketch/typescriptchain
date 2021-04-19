import * as CryptoJS from "crypto-js";

class Block {
    public index:number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // static method
    // string 리턴
    static calculateBlockHash = (
        index:number, 
        previousHash: string, 
        timestamp:number,
         data:string
         ): string => 
         CryptoJS.SHA256(index + previousHash + timestamp + data).toString();


    constructor(
        index:number,
        hash: string, 
        previousHash: string,
        data: string,
        timestamp: number
        )
        {
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
    }
}

const genesisBlock:Block= new Block(0, "20202020202", "", "Hello", 123456);

// an array of Block
let blockchain:[Block] = [genesisBlock];

// block 은 hash를 가짐
// hash : 모든 속성을 엄청 길고 수학적으로 이상한 하나의 문자열로 결합한 것

// crpyto-js 설치
// npm install crypto-js

console.log(blockchain);

    export{};
    