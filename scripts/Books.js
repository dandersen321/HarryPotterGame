var Books = function(){

    var listOfBooks = new Array();

    function newBook(name, audioFolderPath) {

        var listOfAudioFiles = null;

        

        return {
            name: name,
            listOfAudioFiles: listOfAudioFiles
        };
    };

    listOfBooks.push(newBook("Harry Potter 1 - Sorc Stone", "Harry Potter 1"));
    listOfBooks.push(newBook("Harry Potter 2 - Sorc Stone", "Harry Potter 2"));
    listOfBooks.push(newBook("Harry Potter 3 - Sorc Stone", "Harry Potter 3"));
    listOfBooks.push(newBook("Harry Potter 4 - Sorc Stone", "Harry Potter 4"));
    listOfBooks.push(newBook("Harry Potter 5 - Sorc Stone", "Harry Potter 5"));
    listOfBooks.push(newBook("Harry Potter 6 - Sorc Stone", "Harry Potter 6"));
    listOfBooks.push(newBook("Harry Potter 7 - Sorc Stone", "Harry Potter 7"));

    return {
        listOfBooks: listOfBooks
    };

}();