"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("./modelUser/Post"));
const User_1 = __importDefault(require("./modelUser/User"));
const user1 = new User_1.default({
    name: "John",
    email: "john@example.com",
    password: "NovaPrimus"
});
user1.changePassword("sngjnevnen");
console.log(user1.getUser());
const post1 = new Post_1.default({
    authorId: user1.getUser().id,
    title: "Post 1",
    content: "Post 1 content"
});
user1.posts.push(post1);
console.log(user1);
