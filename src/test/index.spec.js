// tslint:disable:no-unused-expression
import {assert, expect} from 'chai';
import * as chai from 'chai';
import * as chalk from 'chalk';
import 'mocha';
import 'sinon';

const log = console.log;
const should = chai.should();

describe('Basic Mocha Test', () => {
    it('should deal with objects', () => {
        const obj = {name: 'Jon', gender: 'male'};
        const objB = {name: 'Jon', gender: 'male'};
        obj.should.deep.equal(objB);
    });
});
