import {assert, expect} from 'chai';
import 'mocha';
// tslint:disable-next-line:no-var-requires
const mockServer = require('mockttp').getLocal();
// tslint:disable-next-line:no-var-requires
const request = require('request');
// tslint:disable-next-line:no-var-requires
const chai = require('chai');
import {fetchMagazine} from '../api/userApi';
import { Category } from '../enums';
import { IBook, IMagazine } from '../interfaces/interfaces';
import Shelf from './Shelf';

// tslint:disable-next-line:no-var-requires
const chaiFetch = require('chai-fetch');

chai.use(chaiFetch);
/*
describe('chai-fetch', () => {
    beforeEach( () => mockServer.start(8080));
    afterEach( () => mockServer.stop());

    it('request verification', async () => {
        const endpointMock = await mockServer.get('/mocked-endpoint').thenReply(200, 'hmm?');

        await request.get(mockServer.urlFor('/mocked-endpoint'));

        const requests = await endpointMock.getSeenRequests();
        expect(requests.length).to.equal(1);
        expect(requests[0].url).to.equal('/mocked-endpoint');
    });
});
 */
/* describe('Shelf', () => {
    describe ('Book', () => {
        const bookShelf: Shelf<IBook> = new Shelf<IBook>();
        .forEach((book) => bookShelf.add(book));
        it('return return each inventory object to bookshelf', () =>
            assert.deepEqual(bookShelf.getFirst(), {
                    id: 10,
                    title: 'The C Programming Language',
                    author: 'K & R',
                    available: true,
                    category: Category.Software,
                },
            ),
        );
    });
}); */
