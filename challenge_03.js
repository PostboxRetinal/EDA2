/*
Create and handle a stack of books
*/

class books{
    constructor(){
        this.books = [];
        this.name;
        this.isbn;
        this.author;
        this.editorial;
    }
    agregarLibro(isbn, name, author, editorial){
        return this.books.push([isbn, name, author, editorial]);
    }
    eliminarLibro(isbn){
        return this.books.pop(isbn);
    }
    consultarUltimo(){
        return this.books[this.books.length - 1];
    }
    size(){
        return this.books.length;
    }
    print(){
        console.log(this.books);
    }
}

const booksQueue = new books();