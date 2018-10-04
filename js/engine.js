function Library(){
 this.bookShelf = new Array();
}
                                       //Book with all values gives me the whole book so use it
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
                                                //This give me the title so use it (just the title).
Library.prototype.removeBookByTitle = function(title){
// I have to remove a book from the book array by it's title find books
//return true if the book was removed * false if no book matched

// This was put here for me to loop through

  for(var index=0; index<this.bookShelf.length; index++) {
   if(this.bookShelf[index].title === title){
     this.bookShelf.splice(index,1);
    return true;
    //console.log(false);
  }
}
return false;
//console.log(true);
};

                                                //This give me the author so use it and it should work fine for me.
Library.prototype.removeBookByAuthor = function(author){

for(var index = 1; index<this.bookShelf.length; index++) {
  if(this.bookShelf[index].author === author){
    this.bookShelf.splice(index,2);
      return true;
      //console.log(true);
    }
  }
  return false;
  //console.log(false);
};

                                             //This random book needs a book so use the book for everthing in the function
Library.prototype.getRandomBook = function(book){

  for(var index = 1; index<this.bookShelf.length; index++) {
    if(this.bookShelf[index].author === book){
      this.bookShelf.math.random.floor(index);
        return true;
        //console.log(true);
      }
    }
    return false;
    //console.log(false);
};



//This is my EventListener this how the Dom listens for me to basically ask for something.
document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();

  gLibrary.addBook(jay);
  gLibrary.addBook(iOprah);
  gLibrary.addBook(lol);
  gLibrary.removeBookByAuthor();
});


 // This code with my book should be added in addEventListener that way I can test it.
// window.book1 = new Book("it", "sk", 200, "jan 1");
// window.book2 = new Book("the shining", "sk", 200, "dec 1");
