import Post from "./modelUser/Post";
import User from "./modelUser/User"


const user1 = new User({
    name: "John",
    email: "john@example.com",
    password: "NovaPrimus"
});

user1.changePassword("sngjnevnen")

console.log(user1.getUser());

const post1= new Post({
    authorId: user1.getUser().id,
    title: "Post",
    content: "Post 1 content",
});


user1.posts.push(post1);
console.log(user1);





