
export abstract class ReferenceItem {
    public static department: string = 'Research';
    private _publisher: string;
    constructor(public title: string,  public year: number) {
        console.log('Creating a new ReferenceItem...');
    }
    public item(): string[] {
        const ref =  [
            `${this.title} was published in ${this.year}.`,
            `Department: ${ReferenceItem.department}`,
        ];
        return ref;
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    public abstract citation(): string;
}
