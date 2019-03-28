import { EventEmitter } from "events";

class ArticleStore extends EventEmitter {
    constructor() {
        super();
        this.state = {
            articles: [
                {
                    name: "HelloWorld",
                    content: "Ego vero sic intellego, Patres conscripti, nos hoc tempore in provinciis decernendis perpetuae pacis habere oportere rationem. Nam quis hoc non sentit omnia alia esse nobis vacua ab omni periculo atque etiam suspicione belli?",
                    author: "Marine Roch",
                    background: "background.png",
                    category: "Style de vie",
                    tag: ["Tag 1", "Tag 2"],
                    public: true,
                    publicationDate: new Date()
                },
                {
                    name: "Bonjour",
                    content: "Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt controversa.",
                    author: "Marine Roch",
                    background: "",
                    category: "",
                    tag: ["", ""],
                    public: true,
                    publicationDate: new Date()
                },
                {
                    name: "Ohayo",
                    content: "Ut enim benefici liberalesque sumus, non ut exigamus gratiam (neque enim beneficium faeneramur sed natura propensi ad liberalitatem sumus), sic amicitiam non spe mercedis adducti sed quod omnis eius fructus in ipso amore inest, expetendam putamus.",
                    author: "Marine Roch",
                    background: "",
                    category: "",
                    tag: ["", ""],
                    public: true,
                    publicationDate: new Date()
                },
                {
                    name: "This is spartiat",
                    content: "Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.",
                    author: "Marine Roch",
                    background: "",
                    category: "",
                    tag: ["", ""],
                    public: true,
                    publicationDate: new Date()
                }
            ]
        };
    }

    createArticle(article) {
        this.setState()
    }

    getAll() {
        return this.state.articles;
    }
}

const articleStore = new ArticleStore();

export default articleStore;