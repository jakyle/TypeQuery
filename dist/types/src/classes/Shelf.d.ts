export default class Shelf<T> {
    private _items;
    add(item: T): void;
    getFirst(): T;
    find(title: string): T;
    printTitle(): void;
}
