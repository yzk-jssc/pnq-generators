import { makeAutoObservable } from "mobx";

class User{
    constructor(){
        makeAutoObservable(this)
    }

    userInfo=[
        {id:1, auth:false,login:'admin',password:'123',collection:[
            {id:'pasw'}
        ]}
    ];

    currUserInfo={
        auth:true,
        login:'admin',
        password:'123'
    }


    logOut(id:number){
        const currUser = this.userInfo.filter(user=>user.id === id)
    }


}

export default new User()