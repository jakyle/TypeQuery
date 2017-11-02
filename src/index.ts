import { Category } from './enums';
import { IBook } from './interfaces/interfaces';

function GetAllBooks() {
    const books = [
        {
            id: 1,
            title: 'Ulysses',
            author: 'James Joyce',
            available: true,
            category: Category.Fiction,
        }, {
            id: 2,
            title: 'A Farewell to Arms',
            author: 'Ernest Hemingway',
            available: false,
            category: Category.Fiction,
        }, {
            id: 3,
            title: 'I know why the Caged Bird Sings',
            author: 'Maya Angelou',
            available: true,
            category: Category.Poetry,
        }, {
            id: 4,
            title: 'Moby Dick',
            author: 'Herman Melville',
            available: true,
            category: Category.Fiction,
        },
    ];
    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for (const currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('FirstAvailable: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): string[] {
    console.log(`Getting books in category: ${Category[categoryFilter]}`);
    const filteredTitles: string[] = [];
    const allBooks = GetAllBooks();
    for (const currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (const title of titles) {
        console.log(title);
    }
}

function GetBookByID(id: number) {
    const allBooks = GetAllBooks();
    return allBooks.filter((book) => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string) {
    console.log(`Creating customer: ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`);

    const booksCheckedOut: string[] = [];

    for (const id of bookIDs) {
        const book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];

function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty === 'string') {
        // get all books by a particular author
        for (const book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    if (typeof bookProperty === 'boolean') {
        // get all books based on specified availability
        for (const book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}
// **********************************************************

const hermansBooks = GetTitles(false);
hermansBooks.forEach((title) => console.log(title));

/* const myBooks : string[] = CheckoutBooks('Thorne', 1, 3, 4);
myBooks.forEach((title) => console.log(title));
 */
// LogFirstAvailable();

/* let fictionBooks = GetBookTitlesByCategory();
fictionBooks.forEach((title) => console.log(title)); */

            /* CreateCustomer('Michelle');
CreateCustomer('Leigh', 6);
CreateCustomer('Marie', 12, 'Atlanta'); */

            /* let x: number;

let idGenerator: (chars: string, nums: number) => string;
idGenerator = (name: string, id: number) =>  id + name;

let myID: string = idGenerator('daniel', 20);
console.log(myID);
 */
            /* const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach((val: string, idx: number, arr: string[]) => console.log(++idx + ' - ' + val));
 */
