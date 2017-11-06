import {assert} from 'chai';
import 'mocha';
import { Encyclopedia } from './Encyclopedia';
import { ReferenceItem } from './ReferenceItem';

const refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);

describe('referenceItem', () => {
    describe('item', () => {
        it('should log correct title and year', () => assert
            .deepEqual(refBook.item(), [
                'WorldPedia was published in 1900.',
                'Department: Research',
                'Edition: 10.',
            ],
        ));
    });
    describe('citation', () => {
        it('should pass proper title and year', () => assert
            .equal(refBook.citation(), 'WorldPedia - 1900'));
    });
});
