import {assert, expect} from 'chai';
import 'mocha';
import { Category } from './enums';
import { IBook } from './interfaces/interfaces';
import { calculateLateFee, MaxBooksAllowed, Purge } from './utilityFunctions';

const inventory: IBook[] = [
    {
        id: 10,
        title: 'The C Programming Language',
        author: 'K & R',
        available: true,
        category: Category.Software,
    }, {
        id: 11,
        title: 'Code Complete',
        author: 'Steve McConnell',
        available: true,
        category: Category.Software,
    }, {
        id: 12,
        title: '8-Bit Graphics with Cobol',
        author: 'A. B.',
        available: true,
        category: Category.Software,
    }, {
        id: 13,
        title: 'Cool autoexec.bat Scripts!',
        author: 'C. D.',
        available: true,
        category: Category.Software,
    },
];

describe('Util', () => {
    describe('lateFee ', () => {
        it('should return 2.25', () =>
            assert.equal(calculateLateFee(9), 2.25));
    });
    describe('maxBooks ', () => {
        it('should return 3', () => {
            assert.equal(MaxBooksAllowed(14), 10);
        });
    });
    describe('purge', () => {
        const purgedBooks: IBook[] = Purge(inventory);
        it ('should splice last 2 of typed parameters []', () =>
            assert.deepEqual(purgedBooks, [
                {
                    id: 12,
                    title: '8-Bit Graphics with Cobol',
                    author: 'A. B.',
                    available: true,
                    category: Category.Software,
                }, {
                    id: 13,
                    title: 'Cool autoexec.bat Scripts!',
                    author: 'C. D.',
                    available: true,
                    category: Category.Software,
                },
        ]));
    });
});
