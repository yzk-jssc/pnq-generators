import { makeAutoObservable } from "mobx"
import { FormEvent } from "react"

class Qr{

    constructor(){
        makeAutoObservable(this)
    }

    qrInfo={
        value:'',
        link:''
    }

    valueHandler(value:string){
        
        this.qrInfo.value = value
    }

    getQrValue(e:FormEvent<HTMLFormElement>){

        e.preventDefault()

        this.qrInfo.link = this.qrInfo.value
        console.log(this.qrInfo.link);
        this.qrInfo.value =''
    }

}

export default new Qr()