import {ReferenceItem} from './ReferenceItem';

export class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    public item(): string[] {
        const ref = super.item();
        ref.push(`Edition: ${this.edition}.`);
        return ref;
    }

    public citation(): string {
        return `${this.title} - ${this.year}`;
    }
}
