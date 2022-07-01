export interface qrAbout{
    value:string;
    link:string;
}


export interface usersListAbout{
    id:number;
    auth:boolean;
    login:string;
    password:string;
}

export interface anonimUser{
    id:number|null;
    auth:boolean;
    login:'';
}

export type userSwitch = usersListAbout | anonimUser