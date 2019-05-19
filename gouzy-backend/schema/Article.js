const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema ({
    url: String,
    name: String,
    content: String,
    author: String,
    background: String,
    category: String,
    tag: Array,
    public: Boolean,
    publicationDate: { type: Date, default: Date.now() }
}, { collection: 'Article' });

mongoose.model('Article', ArticleSchema);