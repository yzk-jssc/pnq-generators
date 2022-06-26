import { makeAutoObservable } from "mobx";
import { femaleNames, maleNames } from "../components/names/namesData/namesData";
import { namesProps } from "../types/namesTypes";

class Name{
    constructor(){
        makeAutoObservable(this)
    }

    namesProps:namesProps ={
        nLength:5,
        male:true,
        female:false,
        quant:3,
        result:[],
    }

    namesList:string[] = []

    lengthHandler(value:number){
        if(value !== undefined){ 
        this.namesProps.nLength= value
        }
    }
    quantHandler(value:number){
        if(value !== undefined){ 
        this.namesProps.quant= value
        }
    }

    genderSwitch(){
        this.namesProps.result=[]
        this.namesProps.female =!this.namesProps.female
        this.namesProps.male = !this.namesProps.male
    }

    getNames(){
        const gender:string = this.namesProps.male? 'male':'female'
        gender ==='male'
        ?this.namesList =[...maleNames]
        :this.namesList=[...femaleNames]
    }

    generateNames(){
        this.getNames()
        if(this.namesList){
            const lengthedNames:string[] = this.namesList.filter(name=>
                name.length === this.namesProps.nLength
            )

            const shuffledNames:string[]  = lengthedNames.sort(()=>Math.random()-0.5).slice(0,this.namesProps.quant)
            
            this.namesProps.result = [...shuffledNames]
        }
    }
}


export default new Name()