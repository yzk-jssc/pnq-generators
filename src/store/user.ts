import { makeAutoObservable } from "mobx";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { usersListAbout, userSwitch } from "../types/userTypes";

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
            {id:'names',items:['asd','zxc','1zxfc23','123',]},
            {id:'passwords',items:['43sssssssss56','cvbnsssssssssssssssssssssssdx','hjklh','1232','456',',,23423']},
            //qrs mby soon
        ],
        },
    ];

    userInfo: userSwitch = {
        id: null,
        auth: false,
        login: "", 
    }; 

    

    login(
        e: FormEvent<HTMLFormElement>,
        login: string,
        password: string,
        setPassword: Dispatch<SetStateAction<string>>
    ) {
        e.preventDefault();

        const currentUser = this.usersList.filter((user) =>
            login === user.login && password === user.password ? user : null
        )[0];
        if (currentUser) {
            this.userInfo.id = currentUser.id;
            this.userInfo.auth = true;
            this.userInfo.login = currentUser.login;
            // this.userInfo = currentUser
        } else {
            login = "enter correct login";
            setPassword("enter correct LOGIN or PASSWORD");
        }
    }

    signInfo={
        login:false,
    }

    signAgain(){
        this.signInfo.login = false
    }

    signIn(
        e: FormEvent<HTMLFormElement>,
        login: string,
        password: string,
        setLogin: Dispatch<SetStateAction<string>>,
        setPassword: Dispatch<SetStateAction<string>>
        
    ) {
        e.preventDefault();

        const signCheckLoginIsNew: boolean | null = this.usersList.every(
            (user) => user.login !== login
        );

        let lastId = this.usersList[this.usersList.length - 1].id + 1;
            
        if (signCheckLoginIsNew && password.length>3) {
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


        } else if(!signCheckLoginIsNew) {

            setLogin('This login already use')

            this.signInfo.login=false


        }else if(login.length<=3) {

            setLogin('Login must be more than 3 letters')

            this.signInfo.login= false

        }else if(password.length<=3){

            setPassword('Password must be more than 3 letters')

            this.signInfo.login= false

        }

    }

    logOut(){
        this.userInfo={
            id:null,
            auth:false,
            login:''
        }
    }
}

export default new User();
