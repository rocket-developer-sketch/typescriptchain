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

    static validateStructure = (aBlcok: Block) : boolean => 
    typeof aBlcok.index === "number" && 
    typeof aBlcok.hash === "string" && 
    typeof aBlcok.previousHash === "string" &&
    typeof aBlcok.timestamp === "number" &&
    typeof aBlcok.data === "string";


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
let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)

const createNewBlock = (data:string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash, 
        newTimestamp, 
        data
    );

    const newBlock: Block = new Block(
        newIndex, 
        newHash, 
        previousBlock.hash, 
        data, 
        newTimestamp
    );

    return newBlock;
}

const getHashForBlock = (aBlock: Block) : string => 
    Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

//구조 유효성 검사
const isBlockValid = (
    candidateBlock: Block, 
    previousBlock: Block
    ) : boolean => {
    // 블록의 구조 유효성 체크
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) { 
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) { // 들어온 블록의 해쉬가 실제로 있는 지 체크
        return false;
    } else {
        return true;
    }
};

const addBlock = (candidateBlock: Block) : void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
}

// block 은 hash를 가짐
// hash : 모든 속성을 엄청 길고 수학적으로 이상한 하나의 문자열로 결합한 것

// crpyto-js 설치
// npm install crypto-js

    export{};
    