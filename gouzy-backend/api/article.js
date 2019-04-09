const router = require('express').Router();
const mongoose = require('mongoose');

const Article = mongoose.model('Article');

/**
 * @param int year :        Year of the article
 * @param int month :       Month of the article
 * @param string url :      URL of the article
 * @return 200 OK + Article, 404 Not Found, 500 Internal Server Error
 */
router.get('/:year/:month/:url', (req, res) => {
    let params = req.params;
    let url = params.name.toLowerCase().replace(/\s+/g, "-");
    let year = params.year;
    let month = params.month - 1;
    Article.findOne({
        url: url,
        publicationDate: {
            $gte: new Date(year, month, 1),
            $lte: new Date(year, month + 1, 0)
        }
    }, (err, article) => {
        if(err) return res.sendStatus(500);
        if(!article) return res.sendStatus(404);
        return res.status(200).send(article);
    });
});

/**
 * @param Article article : JSON Article Object
 * @return 201 Created + NewArticle, 409 Conflict, 500 Internal Server Error
 */
router.put('/', (req, res) => {
    let params = req.body;
    let url = params.name.toLowerCase().replace(/\s+/g, "-");
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    Article.findOne({
        url: url,
        publicationDate: {
            $gte: new Date(year, month, 1),
            $lte: new Date(year, month + 1, 0)
        }
    }, (err, article) => {
        if(err) return res.sendStatus(500);
        if(article) { return res.sendStatus(409) } else {
            let newArticle = new Article({
                url: url,
                name: params.name,
                content: params.content,
                author: params.author,
                category: params.category,
                tag: params.tag,
                public: params.public
            });
            newArticle.save()
                .then(() => { return res.status(201).send(article) })
                .catch((e) => { return res.sendStatus(500) });
        }
    });
});

/**
 * @param Article updatedArticle : JSON Article Object
 * @return 201 Created + UpdatedArticle, 409 Conflict, 500 Internal Server Error
 */
// TODO HTTP Change Article Name
// TODO HTTP Response if Article does not exists
router.post('/', (req, res) => {
    const params = req.body;
    let url = params.name.toLowerCase().replace(/\s+/g, "-");
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let updatedArticle = {
        url: url,
        name: params.name,
        content: params.content,
        author: params.author,
        category: params.category,
        tag: params.tag,
        public: params.public
    };
    Article.findOneAndUpdate({
        url: url,
        publicationDate: {
            $gte: new Date(year, month, 1),
            $lte: new Date(year, month + 1, 0)
        }
    }, updatedArticle)
        .then(() => { return res.status(201).send(updatedArticle) })
        .catch((e) => { return res.sendStatus(500) });
});

/**
 * @param Article article : JSON Article Object
 * @return 204 No Content, 500 Internal Server Error
 */
router.delete('/', (req, res) => {
    const params = req.body;
    let url = params.name.toLowerCase().replace(/\s+/g, "-");
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    Article.findOneAndDelete({
        url: url,
        publicationDate: {
            $gte: new Date(year, month, 1),
            $lte: new Date(year, month + 1, 0)
        }
    })
        .then(() => { return res.sendStatus(204) })
        .catch((e) => { return res.sendStatus(500) });
});

module.exports = router;