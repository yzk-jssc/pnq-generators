export interface usersListAbout{
    id:number;
    auth:boolean;
    login:string;
    password:string;
    collection:userCollection[]
}

export interface anonimUser{
    id:number|null;
    auth:boolean;
    login:string;
}

export interface userCollection{
    id:string;
    items:string[] | any[];

}

export type userSwitch = usersListAbout | anonimUser