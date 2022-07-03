import { makeAutoObservable } from "mobx"
import { FormEvent } from "react";
import { passwordsProps,  } from "../types/passwordTypes"

const pLetters:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const pNumbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
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
         
    }

    generatePassword (e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        let arr:(string| number)[]=[];

        if(this.passwords.letters === true){
            arr = [...arr, ...pLetters]
        }

        if(this.passwords.capLetters === true && this.passwords.letters){

            let capNRegularLett:string[] = [...pLetters].map(c => Math.random() < .6 ? c : c.toUpperCase());

            console.log(capNRegularLett)

            arr = [...arr, ...capNRegularLett]
        }else if (this.passwords.capLetters === true){
            
            let capLetters = [...pLetters].map(l=>l.toUpperCase())
            arr = [...arr, ...capLetters]
        }

        if(this.passwords.symbols === true){
            arr = [...arr, ...pSymbols]
        }

       if(this.passwords.numbers === true){
            arr = [...arr, ...pNumbers]
        }


        const shuffleArr = arr.sort(()=>Math.random()-0.5).slice(0,this.passwords.pLength)
        
        this.passwords.result = (shuffleArr).join('')
    }


}

export default new Password()