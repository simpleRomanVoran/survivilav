class Article {
    constructor (article) {
        this.title = article.title;
        this.description = article.description;
        this.author = article.author;
        this.date = article.date;
        this.time = article.time;
        this.content = article.content;
        this.preview = article.preview;
        this.fullPreview = article.fullPreview;
    }

    open () {}
}

let article = new Article ({
    title: "Добро пожаловать на наш сайт!",
    description: "Здесь всё просто и понятно, давайте поговорим об этом подробнее...",
    author: "Roman_Voran",
    date: moment().format("DD.MM.YYYY"),
    time: moment().format("HH:mm:ss"),
    content: `
<h1 class="heading">Хай</h1>
Привет!
    `,
    preview: "/icon.png",
    fullPreview: "/icon.png",
    tags: ["Добро пожаловать", "Приветствие", "Знакомство", "Начало", "С чего начать", "Как работает?"],
});
// Вывод блоков[статей] на сайт с разными стилями