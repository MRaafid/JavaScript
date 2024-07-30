let book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearPublished: 1925,
    genre: 'Novel',
    pages: 218,
    isAvailable: true,
    publisher: {
        name: 'Charles Scribner\'s Sons',
        location: 'New York',
        yearEstablished: 1846
    }
};
console.log(book.title);
console.log(book. publisher.name); // for nested
console.log(book['pages']);

    
// to add properties
book.Price = 3000;
book.publisher.month = 'May'; // for nested
console.log(book);

// modify
book.price = 2999;
book.publisher.month = 'March'; // for nested
console.log(book);

// delete
delete book.price;
delete book.publisher.month // for nested
console.log(book);

// create new object
let Anime = new Object();


