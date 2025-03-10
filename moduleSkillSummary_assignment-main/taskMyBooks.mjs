/*
In the file books.json there is a listing of books. Write the functions to

Return only books starting with The
Return only books written by authors with a t in their name
The number of books written after 1992
The number of books written before 2004
Return the isbn number of all the books for a given author.
List books alphabetically assending or decendig
List books chronologically assending or decendig
List books grouped by author last name
Lits books grouped by author first name
*/

const books = [
    {
        "title": "Meditations: A New Translation",
        "publication_year": 2002,
        "author": "Marcus Aurelius (Translated by Gregory Hays)",
        "isbn": "978-0812968255"
    },
    {
        "title": "Snuff",
        "publication_year": 2011,
        "author": "Terry Pratchett",
        "isbn": "0-385-61823-5"
    },
    {
        "title": "The Collapsing Empire",
        "publication_year": 2017,
        "author": "John Scalzi",
        "isbn": "978-0765388889"
    },
    {
        "title": "The Colour of Magic",
        "publication_year": 1983,
        "author": "Terry Pratchett",
        "isbn": "0-86140-324-X"
    },
    {
        "title": "The Art of War: A New Translation",
        "publication_year": 2018,
        "author": "Sun Tzu (Translated by Michael Nylan)",
        "isbn": "978-0393355524"
    },
    {
        "title": "Thief of Time",
        "publication_year": 2001,
        "author": "Terry Pratchett",
        "isbn": "0-385-60224-3"
    },
    {
        "title": "Reaper Man",
        "publication_year": 1991,
        "author": "Terry Pratchett",
        "isbn": "0-575-04979-4"
    },
    {
        "title": "The Last Emperox",
        "publication_year": 2020,
        "author": "John Scalzi",
        "isbn": "978-0765389176"
    },
    {
        "title": "Hogfather",
        "publication_year": 1996,
        "author": "Terry Pratchett",
        "isbn": "0-575-06403-X"
    },
    {
        "title": "The Ocean at the End of the Lane",
        "publication_year": 2013,
        "author": "Neil Gaiman",
        "isbn": "0-06-225565-7"
    },
    {
        "title": "A Hat Full of Sky",
        "publication_year": 2004,
        "author": "Terry Pratchett",
        "isbn": "0-385-60736-8"
    },
    {
        "title": "Fortunately, the Milk",
        "publication_year": 2013,
        "author": "Neil Gaiman",
        "isbn": "0-06-222407-7"
    },
    {
        "title": "Aloha from Hell",
        "publication_year": 2011,
        "author": "Richard Kadrey",
        "isbn": "978-0061714320"
    },
    {
        "title": "Anansi Boys",
        "publication_year": 2005,
        "author": "Neil Gaiman",
        "isbn": "0-06-051518-X"
    },
    {
        "title": "Walden",
        "publication_year": 1854,
        "author": "Henry David Thoreau",
        "isbn": "978-0140390445"
    },
    {
        "title": "Wyrd Sisters",
        "publication_year": 1988,
        "author": "Terry Pratchett",
        "isbn": "0-86140-355-X"
    },
    {
        "title": "Monstrous Regiment",
        "publication_year": 2003,
        "author": "Terry Pratchett",
        "isbn": "0-385-60224-3"
    },
    {
        "title": "Kill the Dead",
        "publication_year": 2010,
        "author": "Richard Kadrey",
        "isbn": "978-0061714313"
    },
    {
        "title": "The Ghost Brigades",
        "publication_year": 2006,
        "author": "John Scalzi",
        "isbn": "978-0765354068"
    },
    {
        "title": "The Kill Society",
        "publication_year": 2017,
        "author": "Richard Kadrey",
        "isbn": "978-0062474148"
    },
    {
        "title": "The Getaway God",
        "publication_year": 2014,
        "author": "Richard Kadrey",
        "isbn": "978-0062094612"
    },
    {
        "title": "The View from the Cheap Seats",
        "publication_year": 2016,
        "author": "Neil Gaiman",
        "isbn": "0-06-226226-2"
    },
    {
        "title": "The Bands of Mourning",
        "publication_year": 2016,
        "author": "Brandon Sanderson",
        "isbn": "978-0765378576"
    },
    {
        "title": "Maskerade",
        "publication_year": 1995,
        "author": "Terry Pratchett",
        "isbn": "0-575-06013-9"
    },
    {
        "title": "The Wee Free Men",
        "publication_year": 2003,
        "author": "Terry Pratchett",
        "isbn": "0-385-60532-3"
    },
    {
        "title": "The Rithmatist",
        "publication_year": 2013,
        "author": "Brandon Sanderson",
        "isbn": "978-0765338440"
    },
    {
        "title": "Starsight",
        "publication_year": 2019,
        "author": "Brandon Sanderson",
        "isbn": "978-0399555817"
    },
    {
        "title": "The Graveyard Book",
        "publication_year": 2008,
        "author": "Neil Gaiman",
        "isbn": "0-06-053092-8"
    },
    {
        "title": "Neverwhere",
        "publication_year": 1996,
        "author": "Neil Gaiman",
        "isbn": "0-553-10475-8"
    },
    {
        "title": "Witches Abroad",
        "publication_year": 1991,
        "author": "Terry Pratchett",
        "isbn": "0-575-05129-7"
    },
    {
        "title": "Sourcery",
        "publication_year": 1988,
        "author": "Terry Pratchett",
        "isbn": "0-86140-311-8"
    },
    {
        "title": "Thud!",
        "publication_year": 2005,
        "author": "Terry Pratchett",
        "isbn": "0-385-60867-4"
    },
    {
        "title": "Unseen Academicals",
        "publication_year": 2009,
        "author": "Terry Pratchett",
        "isbn": "0-385-60934-4"
    },
    {
        "title": "The Hero of Ages",
        "publication_year": 2008,
        "author": "Brandon Sanderson",
        "isbn": "978-0765316899"
    },
    {
        "title": "Mistborn: The Final Empire",
        "publication_year": 2006,
        "author": "Brandon Sanderson",
        "isbn": "978-0765311788"
    },
    {
        "title": "Coraline",
        "publication_year": 2002,
        "author": "Neil Gaiman",
        "isbn": "0-380-80734-8"
    },
    {
        "title": "Wintersmith",
        "publication_year": 2006,
        "author": "Terry Pratchett",
        "isbn": "0-385-60970-0"
    },
    {
        "title": "The End of All Things",
        "publication_year": 2015,
        "author": "John Scalzi",
        "isbn": "978-0765376077"
    },
    {
        "title": "Equal Rites",
        "publication_year": 1987,
        "author": "Terry Pratchett",
        "isbn": "0-86140-267-7"
    },
    {
        "title": "Lock In",
        "publication_year": 2014,
        "author": "John Scalzi",
        "isbn": "978-0765375865"
    },
    {
        "title": "Tao Te Ching: A New English Version",
        "publication_year": 1988,
        "author": "Laozi (Translated by Stephen Mitchell)",
        "isbn": "978-0061142666"
    },
    {
        "title": "The Android's Dream",
        "publication_year": 2006,
        "author": "John Scalzi",
        "isbn": "978-0765316974"
    },
    {
        "title": "Carpe Jugulum",
        "publication_year": 1998,
        "author": "Terry Pratchett",
        "isbn": "0-575-06672-5"
    },
    {
        "title": "Interesting Times",
        "publication_year": 1994,
        "author": "Terry Pratchett",
        "isbn": "0-575-05800-3"
    },
    {
        "title": "Agent to the Stars",
        "publication_year": 2005,
        "author": "John Scalzi",
        "isbn": "978-1596060205"
    },
    {
        "title": "Words of Radiance",
        "publication_year": 2014,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326362"
    },
    {
        "title": "Small Gods",
        "publication_year": 1992,
        "author": "Terry Pratchett",
        "isbn": "0-575-05222-6"
    },
    {
        "title": "Firefight",
        "publication_year": 2015,
        "author": "Brandon Sanderson",
        "isbn": "978-0385743587"
    },
    {
        "title": "Norse Mythology",
        "publication_year": 2017,
        "author": "Neil Gaiman",
        "isbn": "0-393-60909-X"
    },
    {
        "title": "The Shepherd's Crown",
        "publication_year": 2015,
        "author": "Terry Pratchett",
        "isbn": "0-857-53286-5"
    },
    {
        "title": "The Book of Disquiet: The Complete Edition",
        "publication_year": 2017,
        "author": "Fernando Pessoa (Translated by Margaret Jull Costa)",
        "isbn": "978-0811226936"
    },
    {
        "title": "Redshirts",
        "publication_year": 2012,
        "author": "John Scalzi",
        "isbn": "978-0765334794"
    },
    {
        "title": "The Prophet",
        "publication_year": 1923,
        "author": "Kahlil Gibran",
        "isbn": "978-0394404288"
    },
    {
        "title": "Ballistic Kiss",
        "publication_year": 2020,
        "author": "Richard Kadrey",
        "isbn": "978-0062672575"
    },
    {
        "title": "Sandman Slim",
        "publication_year": 2009,
        "author": "Richard Kadrey",
        "isbn": "978-0061714306"
    },
    {
        "title": "The Dhammapada: A New Translation of the Buddhist Classic with Annotations",
        "publication_year": 1993,
        "author": "Translated by Gil Fronsdal",
        "isbn": "978-1590303801"
    },
    {
        "title": "Steelheart",
        "publication_year": 2013,
        "author": "Brandon Sanderson",
        "isbn": "978-0385743563"
    },
    {
        "title": "Killing Pretty",
        "publication_year": 2015,
        "author": "Richard Kadrey",
        "isbn": "978-0062373106"
    },
    {
        "title": "InterWorld",
        "publication_year": 2007,
        "author": "Neil Gaiman & Michael Reaves",
        "isbn": "0-06-123896-1"
    },
    {
        "title": "Metrophage",
        "publication_year": 1988,
        "author": "Richard Kadrey",
        "isbn": "0-671-69759-5"
    },
    {
        "title": "Zoe's Tale",
        "publication_year": 2008,
        "author": "John Scalzi",
        "isbn": "978-0765316981"
    },
    {
        "title": "Shadows of Self",
        "publication_year": 2015,
        "author": "Brandon Sanderson",
        "isbn": "978-0765378552"
    },
    {
        "title": "Cytonic",
        "publication_year": 2021,
        "author": "Brandon Sanderson",
        "isbn": "978-0399555855"
    },
    {
        "title": "The Way of Kings",
        "publication_year": 2010,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326355"
    },
    {
        "title": "Night Watch",
        "publication_year": 2002,
        "author": "Terry Pratchett",
        "isbn": "0-385-60265-0"
    },
    {
        "title": "The Last Continent",
        "publication_year": 1998,
        "author": "Terry Pratchett",
        "isbn": "0-575-06540-0"
    },
    {
        "title": "Dead Set",
        "publication_year": 2013,
        "author": "Richard Kadrey",
        "isbn": "978-0062283016"
    },
    {
        "title": "Warbreaker",
        "publication_year": 2009,
        "author": "Brandon Sanderson",
        "isbn": "978-0765320308"
    },
    {
        "title": "Good Omens",
        "publication_year": 1990,
        "author": "Neil Gaiman & Terry Pratchett",
        "isbn": "0-575-04800-3"
    },
    {
        "title": "The Alloy of Law",
        "publication_year": 2011,
        "author": "Brandon Sanderson",
        "isbn": "978-0765330420"
    },
    {
        "title": "The Perdition Score",
        "publication_year": 2016,
        "author": "Richard Kadrey",
        "isbn": "978-0062373267"
    },
    {
        "title": "Jingo",
        "publication_year": 1997,
        "author": "Terry Pratchett",
        "isbn": "0-575-06411-0"
    },
    {
        "title": "The Well of Ascension",
        "publication_year": 2007,
        "author": "Brandon Sanderson",
        "isbn": "978-0765316882"
    },
    {
        "title": "Going Postal",
        "publication_year": 2004,
        "author": "Terry Pratchett",
        "isbn": "0-385-60936-0"
    },
    {
        "title": "The Truth",
        "publication_year": 2000,
        "author": "Terry Pratchett",
        "isbn": "0-385-60102-6"
    },
    {
        "title": "The Human Division",
        "publication_year": 2013,
        "author": "John Scalzi",
        "isbn": "978-0765333513"
    },
    {
        "title": "Mort",
        "publication_year": 1987,
        "author": "Terry Pratchett",
        "isbn": "0-86140-289-8"
    },
    {
        "title": "King Bullet",
        "publication_year": 2021,
        "author": "Richard Kadrey",
        "isbn": "978-0062951571"
    },
    {
        "title": "Butcher Bird",
        "publication_year": 2007,
        "author": "Richard Kadrey",
        "isbn": "978-1597800860"
    },
    {
        "title": "Soul Music",
        "publication_year": 1994,
        "author": "Terry Pratchett",
        "isbn": "0-575-05504-7"
    },
    {
        "title": "Stardust",
        "publication_year": 1999,
        "author": "Neil Gaiman",
        "isbn": "0-380-97728-1"
    },
    {
        "title": "Fragile Things: Short Fictions and Wonders",
        "publication_year": 2006,
        "author": "Neil Gaiman",
        "isbn": "0-06-051522-8"
    },
    {
        "title": "Raising Steam",
        "publication_year": 2013,
        "author": "Terry Pratchett",
        "isbn": "0-857-52227-5"
    },
    {
        "title": "Rumi's Little Book of Life: The Garden of the Soul, the Heart, and the Spirit",
        "publication_year": 2012,
        "author": "Rumi (Translated by Maryam Mafi and Azima Melita Kolin)",
        "isbn": "978-1571746894"
    },
    {
        "title": "Fuzzy Nation",
        "publication_year": 2011,
        "author": "John Scalzi",
        "isbn": "978-0765367038"
    },
    {
        "title": "The Consuming Fire",
        "publication_year": 2018,
        "author": "John Scalzi",
        "isbn": "978-0765388971"
    },
    {
        "title": "The Last Colony",
        "publication_year": 2007,
        "author": "John Scalzi",
        "isbn": "978-0765356185"
    },
    {
        "title": "Old Man's War",
        "publication_year": 2005,
        "author": "John Scalzi",
        "isbn": "978-0765348271"
    },
    {
        "title": "Guards! Guards!",
        "publication_year": 1989,
        "author": "Terry Pratchett",
        "isbn": "0-575-04589-6"
    },
    {
        "title": "Lords and Ladies",
        "publication_year": 1992,
        "author": "Terry Pratchett",
        "isbn": "0-575-05278-1"
    },
    {
        "title": "Eric",
        "publication_year": 1990,
        "author": "Terry Pratchett",
        "isbn": "0-575-04800-3"
    },
    {
        "title": "Feet of Clay",
        "publication_year": 1996,
        "author": "Terry Pratchett",
        "isbn": "0-575-05900-3"
    },
    {
        "title": "Oathbringer",
        "publication_year": 2017,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326379"
    },
    {
        "title": "Head On",
        "publication_year": 2018,
        "author": "John Scalzi",
        "isbn": "978-0765388914"
    },
    {
        "title": "Calamity",
        "publication_year": 2016,
        "author": "Brandon Sanderson",
        "isbn": "978-0385743600"
    },
    {
        "title": "Skyward",
        "publication_year": 2018,
        "author": "Brandon Sanderson",
        "isbn": "978-0399555770"
    },
    {
        "title": "The Fifth Elephant",
        "publication_year": 1999,
        "author": "Terry Pratchett",
        "isbn": "0-575-06769-1"
    },
    {
        "title": "I Shall Wear Midnight",
        "publication_year": 2010,
        "author": "Terry Pratchett",
        "isbn": "0-385-60936-0"
    },
    {
        "title": "Hollywood Dead",
        "publication_year": 2018,
        "author": "Richard Kadrey",
        "isbn": "978-0062474179"
    },
    {
        "title": "Pyramids",
        "publication_year": 1989,
        "author": "Terry Pratchett",
        "isbn": "0-86140-460-2"
    },
    {
        "title": "Rhythm of War",
        "publication_year": 2020,
        "author": "Brandon Sanderson",
        "isbn": "978-0765326386"
    },
    {
        "title": "Trigger Warning: Short Fictions and Disturbances",
        "publication_year": 2015,
        "author": "Neil Gaiman",
        "isbn": "0-06-233026-8"
    },
    {
        "title": "Letters from a Stoic: Epistulae Morales AD Lucilium",
        "publication_year": 1969,
        "author": "Seneca (Translated by Robin Campbell)",
        "isbn": "978-0140442106"
    },
    {
        "title": "Making Money",
        "publication_year": 2007,
        "author": "Terry Pratchett",
        "isbn": "0-385-61100-6"
    },
    {
        "title": "Elantris",
        "publication_year": 2005,
        "author": "Brandon Sanderson",
        "isbn": "978-0765350374"
    },
    {
        "title": "Moving Pictures",
        "publication_year": 1990,
        "author": "Terry Pratchett",
        "isbn": "0-575-04696-5"
    },
    {
        "title": "Men at Arms",
        "publication_year": 1993,
        "author": "Terry Pratchett",
        "isbn": "0-575-05508-X"
    },
    {
        "title": "Odd and the Frost Giants",
        "publication_year": 2008,
        "author": "Neil Gaiman",
        "isbn": "0-06-167173-8"
    },
    {
        "title": "American Gods",
        "publication_year": 2001,
        "author": "Neil Gaiman",
        "isbn": "0-380-97365-0"
    },
    {
        "title": "The Light Fantastic",
        "publication_year": 1986,
        "author": "Terry Pratchett",
        "isbn": "0-86140-203-0"
    },
    {
        "title": "Kill City Blues",
        "publication_year": 2013,
        "author": "Richard Kadrey",
        "isbn": "978-0062094599"
    },
    {
        "title": "The Bhagavad Gita: A New Translation",
        "publication_year": 2002,
        "author": "Stephen Mitchell",
        "isbn": "978-0609810347"
    },
    {
        "title": "Devil Said Bang",
        "publication_year": 2012,
        "author": "Richard Kadrey",
        "isbn": "978-0062094575"
    },
    {
        "title": "The Last Hero",
        "publication_year": 2001,
        "author": "Terry Pratchett",
        "isbn": "0-575-07098-8"
    },
    {
        "title": "The Amazing Maurice and His Educated Rodents",
        "publication_year": 2001,
        "author": "Terry Pratchett",
        "isbn": "0-385-60113-1"
    }
];

function returnBooksStartingWithThe(bookList) {
let booksWithThe = [];
let i = 0;

    while (bookList[i] !== undefined) {
        let bookTitle = bookList[i].title;
            if (bookTitle[0] == "T" && bookTitle[1] == "h" && bookTitle[2] == "e" && bookTitle[3] == " "){
                booksWithThe[booksWithThe.length] = bookList[i];
            }
            i++
    } return booksWithThe;
}
/*
console.log("Books starting with The");
console.log(returnBooksStartingWithThe(books));
*/
function booksByAuthorsWithLetterT(bookList) {
let authorsWithT = [];
let i = 0;
    while (bookList[i] !== undefined) { 
        let j = 0;
        let authors = bookList[i].author;
        while (authors[j] !== undefined) {
            if (authors[j] == "t" || authors[j] == "T") {
                    authorsWithT[authorsWithT.length] = bookList[i];
                    break
            }
            j++;
        }
        i++;
    } return authorsWithT;
}
/*
console.log("Letter T tests");
console.log(booksByAuthorsWithLetterT(books));
*/

function booksAfterSetYear (bookList, year) {
let i = 0;
let numberOfBooks = 0;

    while (bookList[i] !== undefined) { 
        if (bookList[i].publication_year > year) {
            numberOfBooks++;
        }
    i++;
    }   
    return numberOfBooks;
}
/*
console.log("Test books after year");
console.log(booksAfterSetYear(books, 1992));
*/

function booksBeforeSetYear (bookList, year) {
    let i = 0;
    let numberOfBooks = 0;
    
        while (bookList[i] !== undefined) { 
            if (bookList[i].publication_year < year) {
                numberOfBooks++;
            }
        i++;
        }   
        return numberOfBooks;
    }

/*
console.log("Test books before year");
console.log(booksBeforeSetYear(books, 2004));
*/

function returnIBN(bookList, author) {
let authorsISBN = [];
let i = 0;
    while (bookList[i] !== undefined) { 
        if (bookList[i].author == author) {
            authorsISBN[authorsISBN.length] = bookList[i].isbn;
        }
        i++;
    } return authorsISBN;
}
/*
console.log("ISBN number by author");
console.log(returnIBN(books, "Terry Pratchett"));
*/

function bookAscending(bookList) {
    let sortedBooks = [];
    let i = 0;
    while (bookList[i] !== undefined) {
        sortedBooks[i] = bookList[i];
        i++;
    }
    
    let sortedBooksLength = 0;
    while (sortedBooks[sortedBooksLength] !== undefined) {
        sortedBooksLength++;
    }
    
    for (let i = 0; i < sortedBooksLength - 1; i++) {
        for (let j = 0; j < sortedBooksLength - i - 1; j++) {
            let title1 = sortedBooks[j].title;
            let title2 = sortedBooks[j + 1].title;
            
            let k = 0;
            let bookShouldMove = false;
            
            while (title1[k] !== undefined && title2[k] !== undefined) {
                if (title1[k] > title2[k]) {
                    bookShouldMove = true;
                    break;
                } else if (title1[k] < title2[k]) {
                    break;
                }
                k++;
            }
            
            if (!bookShouldMove && title2[k] == undefined && title1[k] !== undefined) {
                bookShouldMove = true;
            }
            
            if (bookShouldMove) {
                let current = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = current;
            }
        }
    }
    
    return sortedBooks;
}
/*
console.log("Ascending Test");
console.log(bookAscending(books));
*/

function bookDescending(bookList) {
    let sortedBooks = [];
    let i = 0;
    while (bookList[i] !== undefined) {
        sortedBooks[i] = bookList[i];
        i++;
    }
    
    let sortedBooksLength = 0;
    while (sortedBooks[sortedBooksLength] !== undefined) {
        sortedBooksLength++;
    }
    
    for (let i = 0; i < sortedBooksLength - 1; i++) {
        for (let j = 0; j < sortedBooksLength - i - 1; j++) {
            let title1 = sortedBooks[j].title;
            let title2 = sortedBooks[j + 1].title;
            
            let k = 0;
            let bookShouldMove = false;
            
            while (title1[k] !== undefined && title2[k] !== undefined) {
                if (title1[k] < title2[k]) {
                    bookShouldMove = true;
                    break;
                } else if (title1[k] > title2[k]) {
                    break;
                }
                k++;
            }
            
            if (!bookShouldMove && title2[k] == undefined && title1[k] !== undefined) {
                bookShouldMove = true;
            }
            
            if (bookShouldMove) {
                let current = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = current;
            }
        }
    }
    
    return sortedBooks;
}
/*
console.log("Descend test");
console.log(bookDescending(books));
*/

function bookAscendingYear(bookList) {
    let sortedBooks = [];
    let i = 0;

    while (bookList[i] !== undefined) {
        sortedBooks[i] = bookList[i];
        i++;
    }

    let sortedBooksLength = 0;
    while (sortedBooks[sortedBooksLength] !== undefined) {
        sortedBooksLength++;
    }

    for (let i = 0; i < sortedBooksLength - 1; i++) {
        for (let j = 0; j < sortedBooksLength - i - 1; j++) {
            let publishYear1 = sortedBooks[j].publication_year;
            let publishYear2 = sortedBooks[j + 1].publication_year;

            if (publishYear1 > publishYear2) {
                let current = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = current;
            }
        }
    }

    return sortedBooks;
}
/*
console.log("Ascending year");
console.log(bookAscendingYear(books));
*/

function bookDescendingYear(bookList) {
    let sortedBooks = [];
    let i = 0;

    while (bookList[i] !== undefined) {
        sortedBooks[i] = bookList[i];
        i++;
    }

    let sortedBooksLength = 0;
    while (sortedBooks[sortedBooksLength] !== undefined) {
        sortedBooksLength++;
    }

    for (let i = 0; i < sortedBooksLength - 1; i++) {
        for (let j = 0; j < sortedBooksLength - i - 1; j++) {
            let publishYear1 = sortedBooks[j].publication_year;
            let publishYear2 = sortedBooks[j + 1].publication_year;

            if (publishYear1 < publishYear2) {
                let current = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = current;
            }
        }
    }

    return sortedBooks;
}
/*
console.log("Descending Year");
console.log(bookDescendingYear(books));
*/

function groupBooksByFirstName(bookList) {
    let sortedBooks = [];
    let i = 0;

    while (bookList[i] !== undefined) {
        let author = bookList[i].author;
        let firstName = "";
        let j = 0;

        while (author[j] !== " " && author[j] !== undefined) {
            firstName = firstName + author[j];
            j++;
        }
        let k = 0;
        let authorGroupExists = false;

        while (sortedBooks[k] !== undefined) {
            let existingAuthor = sortedBooks[k][0].author;
            let existingFirstName = "";
            let m = 0;

            while (existingAuthor[m] !== " " && existingAuthor[m] !== undefined) {
                existingFirstName = existingFirstName + existingAuthor[m];
                m++;
            }

            let n = 0;
            let exists = true;
                while (firstName[n] !== undefined || existingFirstName[n] !== undefined) {
                    if (firstName[n] !== existingFirstName[n]) {
                        exists = false;
                        break;
                    }
                    n++;
                }

                if (exists) {
                    sortedBooks[k][sortedBooks[k].length] = books[i];
                    authorGroupExists = true;
                    break;
                }
                k++;
        }
        if (!authorGroupExists) {
            sortedBooks[sortedBooks.length] = [books[i]];
        }

        i++;
    }
    return sortedBooks;
}
/*
console.log("first name groups");
console.log(groupBooksByFirstName(books));
*/
function groupBooksByLastName(bookList) {
    let sortedBooks = [];
    let i = 0;

    while (bookList[i] !== undefined) {
        let author = books[i].author;
        let lastSpaceIndex = -1;
        let j = 0;

        while (author[j] !== undefined) {
            if (author[j] == " ") {
                lastSpaceIndex = j;
            }
            j++;
        }

        let lastName = "";
        j = lastSpaceIndex + 1;
        while (author[j] !== undefined) {
            lastName = lastName + author[j];
            j++;
        }

        let k = 0;
        let authorGroupExists = false;
        while (sortedBooks[k] !== undefined) {
            let existingAuthor = sortedBooks[k][0].author;
            let existingLastName = "";
            let m = 0;
            let lastSpaceExisting = -1;

            while (existingAuthor[m] !== undefined) {
                if (existingAuthor[m] == " ") {
                    lastSpaceExisting = m;
                }
                m++;
            }

            m = lastSpaceExisting + 1;
            while (existingAuthor[m] !== undefined) {
                existingLastName = existingLastName + existingAuthor[m];
                m++;
            }

            let n = 0;
            let exists = true;
            while (lastName[n] !== undefined || existingLastName[n] !== undefined) {
                if (lastName[n] !== existingLastName[n]) {
                    exists = false;
                    break;
                }
                n++;
            }

            if (exists) {
                sortedBooks[k][sortedBooks[k].length] = bookList[i];
                authorGroupExists = true;
                break;
            }
            k++;
        }

        if (!authorGroupExists) {
            sortedBooks[sortedBooks.length] = [bookList[i]];
        }

        i++;
    }
    return sortedBooks;
}
/*
console.log("Last name groups");
console.log(groupBooksByLastName(books));
*/