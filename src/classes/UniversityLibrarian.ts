import * as Library from '../interfaces/interfaces';

export class UniversityLibrarian implements Library.ILibrarian {
    public name: string;
    public email: string;
    public department: string;

    public assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
