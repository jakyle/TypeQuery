import { Category } from '../enums';

export interface ILibraryResources {
    catalogNumber: number;
}

export interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: IDamageLogger;
}

export interface IEncyclopedia extends ILibraryResources, IBook {
    volume: number;
}

export interface IDamageLogger {
    // tslint:disable-next-line:callable-types
    (reason: string): void;
}

export interface IPerson {
    name: string;
    email: string;
}

export interface IAuthor extends IPerson {
    numBooksPublished: number;
}

export interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}

export interface IMagazine {
    title: string;
    publisher: string;
}
