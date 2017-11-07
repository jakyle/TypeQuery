// tslint:disable:no-unused-expression
import {assert, expect } from 'chai';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as chalk from 'chalk';
import 'mocha';
import * as sinon from 'sinon';
import * as util from 'util';
import AuthController, { IUser } from '../../controllers/auth.controller';
import {CallBack} from '../../interfaces/interface';

const log = console.log;
const testAuth = new AuthController();

describe('AuthController', () => {
    describe.only('isAuthorized', () => {
        let user: IUser = {name: '', roles: ['']};
        // tslint:disable-next-line:only-arrow-functions
        beforeEach(function() {
            user = {
                name: 'Jimmy',
                roles: ['user'],
                // tslint:disable-next-line:object-literal-shorthand
                isAuthorized: function(neededRole: string) {
                    return this.roles.indexOf(neededRole) >= 0;
                },
            };
            sinon.spy(user, 'isAuthorized');
            testAuth.user = user;
        });
        it.only('Should return false if not authorized', () => {
            const isAuth = testAuth.isAuthorized('admin');
            sinon.spy(testAuth, 'isAuthorized');
            isAuth.should.be.false;
            log(testAuth.isAuthorized);
        });
        it('Should return true if authorized', () => {
            testAuth.user.roles = ['user', 'admin'];
            const isAuth = testAuth.isAuthorized('admin');
            isAuth!.should.be.true;
        });
        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    });
    // tslint:disable-next-line:only-arrow-functions
    describe('isAuthorizedAsync', () => {
        it('Should return false if not authorized', (done) => {
            testAuth.isAuthorizedAsync('admin', (isAuth: any): any => {
                assert.equal(false, isAuth);
                done();
            });
        });
    });
    describe('isAuthorizedPromise', () => {
        it('fail', () => {
        return testAuth.find({ token: 'invalidToken' }).should.eventually.be.rejectedWith(Error);
    });

        it('pass', () => {
            return testAuth.find({ token: 'validToken' }).should.eventually.be.true;
        });
    });
    describe('getIndex', () => {
        it('should render index', () => {
            const req: object = {};
            const res: any = {
                render: sinon.spy(),
            };
            testAuth.getIndex(req, res);
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');
        });
    });
});
