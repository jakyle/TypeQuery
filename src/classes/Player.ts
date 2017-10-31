import {IPerson} from '../interfaces/person';

export default class Player implements IPerson {
    public age: number;
    public name: string;
    public highScore: number;
    public formatName() {
        return this.name.toUpperCase();
    }
}
