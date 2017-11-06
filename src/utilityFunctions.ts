
export function calculateLateFee(daysLate: number): number {
    return daysLate * .25;
}

export function MaxBooksAllowed(age: number): number {
    if (age < 12)  {
        return 3;
    } else {
        return 10;
    }
}

function privateFunc(): string {
    return 'This is private...';
}

export function Purge<T>(inventory: T[]): T[] {
    // implemenet fancy logic here...
    return inventory.splice(2, inventory.length);
}
