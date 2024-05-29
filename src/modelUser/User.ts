import UserType from "../types/UserType";
import {v4 as uuid} from 'uuid';
import Post from "./Post";

export default class User {
    private id:string
    private email:string;
    private password:string;
    protected name:string;

    public posts: Post[];

    constructor(data:UserType) {
        this.id = uuid();
        this.name=data.name;
        this.email=data.email;
        this.posts=[]

        if (data.password) {
            this.password=data.password;
        } else {
            this.password="senha default";
        }
    }
    public changeName(name:string){
        this.name=name;
    }
    public changePassword(password:string){
        this.password=password;
        if (password.length >= 4) {
            console.log("Senha atualizada com sucesso!");
            
        } else {
            console.log("Erro, senha deve ter no mínimo 4 caracteres.");
            
        }
    }
    public getUser(){
        return {
            id:this.id,
            name:this.name,
            email:this.email,
            password: this.maskPassword() 
        }
    }
    private maskPassword(): string {
        let mask: string = "";

        for (let index = 0; index < this.password.length; index++) {
            mask += "*";
        }
        return mask;
    }
}

