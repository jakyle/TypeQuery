import { IPerson } from '../interfaces/person';
export default class Player implements IPerson {
    age: number;
    name: string;
    highScore: number;
    formatName(): string;
}
