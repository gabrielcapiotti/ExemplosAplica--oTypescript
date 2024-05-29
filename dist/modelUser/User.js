"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(data) {
        this.id = (0, uuid_1.v4)();
        this.name = data.name;
        this.email = data.email;
        this.posts = [];
        if (data.password) {
            this.password = data.password;
        }
        else {
            this.password = "senha default";
        }
    }
    changeName(name) {
        this.name = name;
    }
    changePassword(password) {
        this.password = password;
        if (password.length >= 4) {
            console.log("Senha atualizada com sucesso!");
        }
        else {
            console.log("Erro, senha deve ter no mínimo 4 caracteres.");
        }
    }
    getUser() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.maskPassword()
        };
    }
    maskPassword() {
        let mask = "";
        for (let index = 0; index < this.password.length; index++) {
            mask += "*";
        }
        return mask;
    }
}
exports.default = User;
