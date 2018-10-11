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

  // I have to fix this code with index

  var haveRemoved = false;
  for(var index=0; index<this.bookShelf.length; index++) {
    if(this.bookShelf[index].author === author){
      this.bookShelf.splice(index,1);
      index--;
      haveRemoved = true;
    }
  }
  return haveRemoved;
};


// ******************** Question 4 ************************************

                                             //This random book needs a book so use the book for everything in the function. I might have to make a random object to get this to work.
Library.prototype.getRandomBook = function(book){

  // ******** This is the old code that i cant get to work **************

  // var data = {}; // I just made a object with creations or something that can hold the data for the information I want to use.
  // data.authors = ["Jay-Z", "wow","Oprah Winfrey"]; //made key of authers and a array of values
  // data.titles =["Decoded","Journey to Beloved","kik"];
  // //made key of titles and a array of values
  // data.numPages =[336,434,500];
  // //made key of numPages and a array of values
  // data.pubDates =[2011,1998,2010];
  //
  // function random (type){ //I've created a function that takes a argument of type.
  //   //console.log("type", type);
  //   var keyValue = data[type]; //I've passed the string into data as a key to capture the values. This becomes the array from data.
  //   //console.log("keyValue", keyValue);
  //   return keyValue[Math.floor(Math.random() * data[type].length)];
  // }
  //
  // book.author = random("authors");
  // book.title = random("titles");
  // book.numPages = random("numPages");
  // book.pubDates = random("pubDates");

  //This is the random book that works for me from Ashley
    if(this.bookShelf.length > 0) {
      var randomIndex = Math.floor(Math.random() * this.bookShelf.length);
      return this.bookShelf[randomIndex];
    }
    else {
      return null;
  }




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

                                            // This is the title in the book so I have to use this value to make it work.

Library.prototype.getBookByTitle = function(title){
                                                      // This Book refers to the book value.
  var titleResults = this.bookShelf.filter(function(book) {
    return book.title.indexOf(title) > -1;// helps looks for indexof title in array === -1 if not found
  });
  return titleResults;
  };

//********************** Question 6  *******************************

                                              // This is the author in the book so I have to use this value to make it work.

 Library.prototype.getBookByAuthor = function(author){

   var authorResults = this.bookShelf.filter(function(book) {
       return book.author.indexOf(author) > -1;//helps looks for indexof title in array === -1 if not found
     });
  return authorResults;
 };

//********************** Question 7  *******************************
// This code was from ashley I just have to test it to make sure it all work right because I'm still learning.

// This is what i need to use to est the code it needs to be an array with a fake name to work.

// gLibrary.addBooks([{
// title: "recoded",
// author: "Jay-z",
// numPages: 336,
// pubDate: 2011
// }]);

                                            //I have to use a book Array to make this work with the addbook function

Library.prototype.addBooks = function(bookArray){
  var addedBooks = 0;
	for (var index = 0; index < bookArray.length; index++) {
  	if (this.addBook(bookArray[index])){
			addedBooks ++;
		}
  }
  console.log(addedBooks + " books (bookArray) added");
  return addedBooks;
 };

//********************** Question 8  *******************************

Library.prototype.getAuthors = function(authors){
  var listOfAuthors = this.bookShelf.map(function(book) {
    return book.author;
  });
  var allAuthors = listOfAuthors.filter(function(author, i) {
    return listOfAuthors.indexOf(author) >= i;
  });
return allAuthors;

 };

 //********************** Question 9  *******************************

 Library.prototype.getRandomAuthorName = function(authors){
   Library.prototype.getRandomAuthorName = function() {
  var randomBook = this.getRandomBook();
  return randomBook.author;
};


 };


//This is my EventListener this is how the Dom listens for me to basically ask for something.
document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();

  // This code with my book should be added in addEventListener that way I can test it.

  window.book1 = new Book("Decoded", "Jay-Z", 336, 2011);
  window.book2 = new Book("Journey to Beloved", "Oprah Winfrey", 434, 1998);
  window.book3 = new Book("kik", "wow", 500, 2010);


  gLibrary.addBook(book1);
  gLibrary.addBook(book2);
  gLibrary.addBook(book3);
  gLibrary.getRandomAuthorName();
  gLibrary.getBookByAuthor();

});


 // This code with my book should be added in addEventListener that way I can test it.
// window.book1 = new Book("it", "sk", 200, "jan 1");
// window.book2 = new Book("the shining", "sk", 200, "dec 1");
