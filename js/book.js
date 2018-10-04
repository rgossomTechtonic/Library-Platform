function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;

}
Book.prototype.editBook = function(oBook)
{

};
// This is where all my books are stored! I have an object with properties and methods

var jay = new Book ("Decoded","Jay-z",336,2011);
var iOprah = new Book ("Journey to Beloved","Oprah Winfrey",434,1998);
var lol = new Book ("kik","wow",500,2010);



// old books with the objects
// var jay = new Book({
//    title: "Decoded",
//    author: "Jay-z",
//    numPages: 336,
//    pubDate: 2011
//  });
//
// var iOprah = new Book({
//     title: "Journey to Beloved",
//     author: "Oprah Winfrey",
//     numPages: 434,
//     pubDate: 1998
//   });
//
// var lol = new Book({
//     title: "kik",
//     author: "wow",
//     numPages: "ccc",
//     PubDate: "min",
//   });
