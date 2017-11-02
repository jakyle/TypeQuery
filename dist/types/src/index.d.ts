declare function GetAllBooks(): {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}[];
declare function LogFirstAvailable(books?: {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}[]): void;
declare enum Category {
    Biography = 0,
    Poetry = 1,
    Fiction = 2,
    History = 3,
    Children = 4,
}
declare function GetBookTitlesByCategory(categoryFilter?: Category): string[];
declare function LogBookTitles(titles: string[]): void;
declare function GetBookById(id: number): {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};
declare function CreateCustomerID(name: string, id: number): string;
declare function CreateCustomer(name: string, age?: number, city?: string): void;
declare function CheckoutBooks(customer: string, ...bookIDs: number[]): string[];
