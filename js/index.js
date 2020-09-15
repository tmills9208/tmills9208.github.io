import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js";
import "https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.js";
import aPages from "../pages/index.js";

class Page {
    render(){
        console.log("render called on page");
    }
}

class Nav extends Page{
    render(){
        let sMenu = "";
        for(let i = 0; i < aPages.length; i++){
            if (aPages[i].title == "index") continue;
            sMenu += `
            <li class="nav-item">
                <a class="nav-link" href="#${aPages[i].title}">${aPages[i].title}</a>
            </li>
            `
        }

        $("nav").html(`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#index">Tyler Mills</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                ${sMenu}
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
        `);
    }
}

class Section extends Page{
    constructor(oOptions){
        super();
        this.oOptions = oOptions;
    }
    render(){
        $.get(`/pages/${this.oOptions.fname}`, (sMarkdown)=>{
            $(`#${this.oOptions.title}`).html(
                marked(sMarkdown)
            )
        })
    }
}

class Article extends Page{
    render(){
        for(let n = 0; n < aPages.length; n++){
            $("article").append(
                `<section id="${aPages[n].title}"></section>`
            );
            new Section(aPages[n]).render();
        }
    }
}

class Footer extends Page{
    render(){
        const sName = "Tyler Mills";
        const yToday = new Date().getFullYear();
        $("footer").html(
            `&copy; ${yToday} ${sName}`
        );
    }
}

class Portfolio extends Page{
    constructor(){
        super();
        this.header = new Page();
        this.nav = new Nav();
        this.article = new Article();
        this.footer = new Footer();
    }
    render(){
        this.header.render();
        this.nav.render();
        this.article.render();
        this.footer.render();
    }
}

$(document).ready(()=>{
    new Portfolio().render();
});

