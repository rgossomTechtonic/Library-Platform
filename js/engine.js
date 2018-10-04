function Library(){
 this.bookShelf = new Array();
}

Library.prototype.addBook = function(book){
  //check if book is already in my array (this.bookShelf)
  //Add book thats coming from book param if the title is not already in arr
  //return true if book was added and false if it was not add or already exists


  // This was put here for me to loop through

  for(var index=0; index<this.bookShelf.length; index++) {
    if(this.bookShelf[index].title === book.title){
      return false;
      //console.log(false);
    }
  }
  this.bookShelf.push(book);
  return true;
  //console.log(true);
};

Library.prototype.removeBookByTitle = function(title)
{
// I have to remove a book from the book array by its title
//return true if the book was removed * false if no book matched

 this.BookShelf.splice(title);

};

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();


});


// I put this here so it will show up in the console. The set timeout just lets the runtime have a delay in the console

setTimeout(function(){
  gLibrary.addBook(jay);
  gLibrary.addBook(iOprah);
},500);

 // This code with my book should be added in addEventListener that way I can test it.
// window.book1 = new Book("it", "sk", 200, "jan 1");
// window.book2 = new Book("the shining", "sk", 200, "dec 1");
