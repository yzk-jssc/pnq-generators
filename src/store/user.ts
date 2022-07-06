import { makeAutoObservable } from "mobx";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { signInfoAbout, usersListAbout, userSwitch } from "../types/userTypes";

class User {
    constructor() {
        makeAutoObservable(this);
    }

    usersList: usersListAbout[] = [
        {
            id: 1,
            auth: false,
            login: "root",
            password: "",
            collection:[
            {id:'names',items:['123sssssssssssssssssss','ssssssssss',',asdasdasdsad']},
            {id:'passwords',items:[]},
            //qrs mby soon
        ],
        },
    ];

    userInfo: userSwitch = {
        id: null,
        auth: false,
        login: "", 
    }; 

    loginCheck: boolean | null =null

    login(
        login: string,
        password: string,
        remember:boolean,
    ) {

        const currentUser = this.usersList.filter((user) =>
            login === user.login && password === user.password ? user : null
        )[0];
        if (currentUser) {
            this.userInfo.id = currentUser.id;
            this.userInfo.auth = true;
            this.userInfo.login = currentUser.login;
            const userRememer= this.userInfo
            if(remember){
                localStorage.setItem('pnq-user_now',JSON.stringify(userRememer))
            }
        } else {
            this.loginCheck = false
        }

    }

    checkUserRemember(){
        localStorage.getItem('pnq-user_now')
        ? this.userInfo = JSON.parse(localStorage.getItem('pnq-user_now')!)
        : this.userInfo = {id: null,
            auth: false,
            login: "", 
        }
    }

    signInfo:signInfoAbout={
        login:null,
        password:null,
        uniqLogin:null,
    }

    signAgain(){
        this.signInfo.login = false
        this.signInfo.password = false
    }

    signIn(
        login: string,
        password: string,
        
    ) {
        this.signInfo ={
            login:null,
            password: null,
            uniqLogin: null,
        }

        const signCheckLoginIsNew: boolean | null = this.usersList.every(
            (user) => user.login !== login
        );

        let lastId = this.usersList[this.usersList.length - 1].id + 1;
            
        if(!signCheckLoginIsNew) {


            this.signInfo.uniqLogin=false
            this.signInfo.password= true


        }else if(login.length<=3) {

            this.signInfo.login= false

        }else if(password.length<=3){

            this.signInfo.password= false

        }else if (signCheckLoginIsNew && password.length>3 && login.length>=3) {
    
                this.usersList = [
                    ...this.usersList,
                    {
                        id: lastId,
                        auth: false,
                        login: login,
                        password: password,
                        collection:[]
                    },
                ];
                
                this.signInfo.login=true
                this.signInfo.password=true
                this.signInfo.uniqLogin=true
            
        }else{

        }

    }

    logOut(){
        this.userInfo={
            id:null,
            auth:false,
            login:''
        }
        localStorage.setItem('pnq-user_now','')
    }
}

export default new User();
