import { makeAutoObservable } from "mobx"
import { userCollection } from "../types/userTypes"
import user from "./user"

class Collection{

    constructor(){
        makeAutoObservable(this)
    }

    
    collectionList:userCollection[] =[
        { id:'',
        items:['']}
    ] 
    currentList={
        id:'qrs'
    }

    getCollection(){
        const currUserCollection = user.usersList.filter(u => u.id === user.userInfo.id)[0].collection
        this.collectionList = currUserCollection
        
    }

    swithCollectionsToPas(){
        this.currentList.id ='passwords'
    }

    swithCollectionToNames(){
        this.currentList.id ='names'

    }

}

export default new Collection()//текущий айди менять при переключении