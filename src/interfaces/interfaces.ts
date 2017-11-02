import { Category } from '../enums';

export interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}
