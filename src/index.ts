import {fetchMagazine} from './api/userApi';
import {ReferenceItem} from './classes/ReferenceItem';
import {UniversityLibrarian} from './classes/UniversityLibrarian';
import { Category } from './enums';
import * as Library from './interfaces/interfaces';

function GetAllBooks(): Library.IBook[] {
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

function GetBookByID(id: number): Library.IBook {
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

function printBook(book: Library.IBook): void {
    console.log(`${book.title} by ${book.author}`);
}
// **********************************************************

export const test = {
    sayHello: () =>  'hello',
    addNumbers: (num1: number, num2: number) => num1 + num2,
};

export const favoriteLibrarian: Library.ILibrarian = new UniversityLibrarian();

fetchMagazine().then( (data) => {
    magInvTrans(data);
});

const magInvTrans = (data: any): void => magInv = data;

export let magInv: any;
console.log(magInv);

/* const myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 250,
    markDamaged : (reason: string) => console.log('Damaged: ' + reason),
};

/* printBook(myBook);
myBook.markDamaged!('torn pages');
 */
/*
let logDamage: DamageLogger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);
logDamage('coffee stains');
 */
