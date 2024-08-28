/*
Create and handle new stack of books.

✓Every book must have its Name, ISBN, Author and Editorial
✓Fill the stack with some examples of data
*/
class Book{
    constructor(isbn, title, autor, editorial){
        this.isbn = isbn;
        this.title = title;
        this.autor = autor;
        this.editorial = editorial;
    }
}
class Books{
    constructor(){
        this.books = [];
    }
    agregarLibro(isbn, title, autor, editorial){
        return this.books.push([isbn, title, autor, editorial]);
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
const libro1 = new Book(9788420670992, 'El principito', 'Antoine de Saint-Exupéry', 'Emecé Editores');
const libro2 = new Book(9788445077671, 'El señor de los anillos', 'J.R.R. Tolkien', 'Minotauro');
const libro3 = new Book(9780446677474, 'Padre rico, padre pobre', 'Robert Kiyosaki', 'Penguin Random House');
const listaLibros = new Books();

listaLibros.agregarLibro(libro1.isbn, libro1.title, libro1.autor, libro1.editorial);
listaLibros.agregarLibro(libro2.isbn, libro2.title, libro2.autor, libro2.editorial);
listaLibros.agregarLibro(libro3.isbn, libro3.title, libro3.autor, libro3.editorial);