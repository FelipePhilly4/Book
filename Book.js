class Book {
    constructor (title, author, pages, description, currentPage, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook (pageNumber){
        if (pageNumber<=0 || pageNumber> this.pages){
            console.log("Ce numéro de page est invalide");
        } else if (this.currentPage === pageNumber){
            this.currentPage = pageNumber;
            console.log("Vous êtes sur la dernière page lue")
        } else if (pageNumber === this.pages){
            this.read = true;
            console.log("Vous avez terminé le livre");
        } 
    }
} 

 