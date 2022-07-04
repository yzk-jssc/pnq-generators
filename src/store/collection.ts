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
        id:'passwords'
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


    addInMyCol(value:string){
       
        const Collection =user.usersList.filter(u=>u.id===user.userInfo.id)[0].collection.filter(cols=>cols.id === this.currentList.id)[0].items
    
        if(!Collection.includes(value)){
            user.usersList.filter(u=>u.id===user.userInfo.id)[0].collection.filter(cols=>cols.id === this.currentList.id)[0].items = [...Collection,value]
        }

    }

}

export default new Collection()//текущий айди менять при переключении