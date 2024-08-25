class books{
    constructor(){
        this.books = [];
        this.name;
        this.isbn;
        this.author;
        this.editorial;
    }
    agregarLibro(name, isbn, author, editorial){
        return this.books.push([name, isbn, author, editorial]);
    }
    eliminarLibro(isbn){
        return this.books.pop(isbn);
    }
    consultarUltimo(){
        return this.books.peek();
    }
    size(){
        return this.books.length;
    }
    print(){
        console.log(this.books);
    }
}

const booksQueue = new books();