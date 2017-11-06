export default class Shelf<T> {
    private _items: T[] = new Array<T>();

    public add(item: T): void {
        this._items.push(item);
    }

    public getFirst(): T {
        return this._items[0];
    }
}
