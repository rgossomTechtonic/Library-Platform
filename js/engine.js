function Library(){
 this.bookShelf = new Array();
}

// ************************ Question 1 ****************************
                                       //Book with all values gives me the whole book so use it
Library.prototype.addBook = function(book){
  //check if book is already in my array (this.bookShelf)
  //Add book thats coming from book param if the title is not already in arr
  //return true if book was added and false if it was not add or already exists


  // This was put here for me to loop through

  for(var index=0; index<this.bookShelf.length; index++) {
    if(this.bookShelf[index].title === book.title){
      return false;
    }
  }
  this.bookShelf.push(book);
  return true;

};

// ******************** Question 2 ************************************
                                                //This give me the title so use it (just the title).
Library.prototype.removeBookByTitle = function(title){
// I have to remove a book from the book array by it's title to find books
//return true if the book was removed and false if no book matched

// This was put here for me to loop through

  for(var index=0; index<this.bookShelf.length; index++) {
   if(this.bookShelf[index].title === title){
     this.bookShelf.splice(index,1);
    return true;
  }
}
return false;

};

// ******************** Question 3 ************************************

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


// ******************** Question 4 ************************************

                                             //This random book needs a book so use the book for everything in the function. I might have to make a random object to get this to work.
Library.prototype.getRandomBook = function(book){
  var data = {}; // I just made a object with creations or something that can hold the data for the information I want to use.
  data.authors = ["Jay-Z", "wow","Oprah Winfrey"]; //made key of authers and a array of values
  data.titles =["Decoded","Journey to Beloved","kik"];
  //made key of titles and a array of values
  data.numPages =[336,434,500];
  //made key of numPages and a array of values
  data.pubDates =[2011,1998,2010];

  function random (type){ //I've created a function that takes a argument of type.
    //console.log("type", type);
    var keyValue = data[type]; //I've passed the string into data as a key to capture the values. This becomes the array from data.
    //console.log("keyValue", keyValue);
    return keyValue[Math.floor(Math.random() * data[type].length)];
  }

  book.author = random("authors");
  book.title = random("titles");
  book.numPages = random("numPages");
  book.pubDates = random("pubDates");

  // This loop has something to do with math.Random/you can use .floor to make the number a even number.
  //return a random book object from an array. 1.) I need to find a book at random 2.) I need to find a book and return it with a call 3)If I don't find a book I need to return null when you can't find one.
  // for(var index = 1; index<this.bookShelf.length; index++) {
  //   if(this.bookShelf[index].book === book){
  //     this.bookShelf.Math.floor(Math.random(index)*book.length);
  //       return true;
  //       //console.log(true);
  //     }
  //   }
  //   return false;
  //   //console.log(false);
};

// ******************** Question 5 ************************************

Library.prototype.getBookByTitle = function(title){

  for(var index = 1; index<this.bookShelf.length; index++) {
    if(this.bookShelf[index].title === title){
      this.bookShelf.push(this.bookshelf[i]);
        return true;
      }
    }
    return foundBook;

  };

//********************** Question 6  *******************************

 Library.prototype.getBookByAuthor = function(authorName){


 };

//********************** Question 7  *******************************
// This code was from ashley I just have to test it to make sure it all work right because I'm still learning.

                                            //I have to use a book Array to make this work with the addbook function

Library.prototype.addBooks = function(booksArray){
  var addedBooks = 0;
	for (var index = 0; index < booksArray.length; index++) {
  	if (this.addBook(booksArray[index])){
			addedBooks ++;
		}
  }

 };

//********************** Question 8  *******************************

Library.prototype.getAuthors = function(authors){


 };

 //********************** Question 9  *******************************

 Library.prototype.getRandomAuthorName = function(authors){


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
