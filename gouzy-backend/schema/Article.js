const mongoose = require('mongoose');

let articleSchema = new mongoose.Schema ({
    name: String,
    tag: String,
    subtag: String
});

articleSchema.methods.preview = () => {
    console.log(this);
    return this.subtag ? this.subtag : "This is empty !";
};

let Article = mongoose.model('Article', articleSchema);

let article1 = new Article({name: "This is me !", subtag: "Hello world"});
let article2 = new Article({name: "Oh no"});

console.log(article1.preview());
console.log(article2.preview());
