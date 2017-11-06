import {assert, expect} from 'chai';
// tslint:disable-next-line:no-var-requires
import 'mocha';
import 'sinon';
import { fetchMagazine } from './api/userApi';
import {UniversityLibrarian} from './classes/UniversityLibrarian';
import {Category} from './enums';
import { favoriteLibrarian, test } from './index';
import * as Library from './interfaces/interfaces';

const res = {
    sayHello: test.sayHello(),
    addNumbers: test.addNumbers(5, 5),
};

favoriteLibrarian.name = 'Sharon';
const favLibName: string = favoriteLibrarian.name;

describe ('Test', () => {
    describe('sayHello ', () => {
        it('should return hello', () => assert.equal(res.sayHello, 'hello'));

        it('should return: string', () => assert.typeOf(res.sayHello, 'string'));
    });
    describe('addNumbers ', () =>  {
        it('should be > 5', () => {
            assert.isAbove(res.addNumbers, 5);
        });

        it('should return: number', () => {
            assert.typeOf(res.addNumbers, 'number');
        });
    });
    it('should return a string', () => expect(favLibName).to.be.a('string'));
});
