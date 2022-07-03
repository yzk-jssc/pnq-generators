import { makeAutoObservable } from "mobx"
import { FormEvent } from "react"
import { qrAbout } from "../types/qrTypes"

class Qr{

    constructor(){
        makeAutoObservable(this)
    }

    qrInfo:qrAbout={
        value:'',
        link:''
    }

    valueHandler(value:string){
        
        this.qrInfo.value = value
    }

    getQrValue(e:FormEvent<HTMLFormElement>){

        e.preventDefault()

        this.qrInfo.link = this.qrInfo.value
        this.qrInfo.value =''
    }

}

export default new Qr()