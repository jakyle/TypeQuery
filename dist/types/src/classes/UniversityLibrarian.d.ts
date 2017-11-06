import * as Library from '../interfaces/interfaces';
export declare class UniversityLibrarian implements Library.ILibrarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void;
}
