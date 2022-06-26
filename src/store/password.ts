import { makeAutoObservable } from "mobx"
import { passwordsProps,  } from "../types/passwordTypes"

const pLetters:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const pNumbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pCapLetters:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let pSymbols:string[] = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

class Password{

    constructor(){
        makeAutoObservable(this)
    }

    passwords:passwordsProps ={
        pLength:10,
        letters:true,
        numbers:true,
        symbols:false,
        capLetters:false,
        result:'',
    }
    
    lengthHandler(value:number){
        if(value !== undefined){ 
        this.passwords.pLength= value
        }
    }
    
    lettersSwitch(){
        this.passwords.letters= !this.passwords.letters
    }

    numbersSwitch(){
        this.passwords.numbers= !this.passwords.numbers
    }
    
    capLettersSwitch(){
        this.passwords.capLetters= !this.passwords.capLetters
    }
    
    
    symbolsSwitch(){
        this.passwords.symbols= !this.passwords.symbols
        console.log(this.passwords.symbols);
         
    }

    generatePassword (){
        let arr:(string| number)[]=[];

        if(this.passwords.letters === true){
            arr = [...arr, ...pLetters]
        }

        if(this.passwords.capLetters === true){
            arr = [...arr, ...pCapLetters]
        }

        if(this.passwords.symbols === true){
            arr = [...arr, ...pSymbols]
        }

       if(this.passwords.numbers === true){
            arr = [...arr, ...pNumbers]
        }


        const shuffleArr = arr.sort(()=>Math.random()-0.5).slice(0,this.passwords.pLength+1)
        
        this.passwords.result = (shuffleArr).join('')
    }

}

export default new Password()