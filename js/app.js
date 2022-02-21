//Book class: represnt a book
// UI class : handle UI Task
// Event display book

//event remove book


class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}


//ui class

class UI{
    static displayBooks(){
        const storeBooks = [
            {
                title:'Book One',
                author:'john Doe',
                isbn:'33425',
            },
            {
                title:'Book Two',
                author:'john Doe',
                isbn:'464346',
            }
        ];
        const books = storeBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = ` 
          <td> ${book.title} </td>         
          <td> ${book.author} </td>         
          <td> ${book.isbn} </td>         
          <td> <a href="#" class="btn btn-danger btn-sm delet"> x </a>  </td>
        `;
        list.appendChild(row);
    }
    static deletBook(el){
        if(el.classList.contains('delet')){
            el.parentElement.parentElement.remove();

        }
    }

    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
        
    };
}
// store class: Handle Storage 

//Even: dispplay Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

// event add a a BOOK
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    //prevent actual submit
    e.preventDefault();

 const title =document.querySelector('#title').value; 
 const author =document.querySelector('#author').value; 
 const isbn =document.querySelector('#isbn').value; 
 //validate
 if(title ==='' || author === '' || isbn === ''){
     alert('Please fill in alll field');
 } else{
     
 }
//insattiate book
const book = new Book(title,author,isbn);
// add book to UI
UI.addBookToList(book);
         // clear field
         UI.clearFields() ;                                       ;
});

//event: remove a Book
document.querySelector('#book-list').addEventListener('click',(e)=>{
 UI.deletBook(e.target)
})