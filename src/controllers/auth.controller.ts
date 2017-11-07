import {CallBack} from '../interfaces/interface';

export interface IUser {
    name?: string;
    roles: string[];
    isAuthorized?: (neededRole: string) => boolean;
}

export default class AuthController {
    private _user: IUser = {
        name: '',
        roles: [''],
    };

    public get user(): IUser {
        return this._user;
    }
    public set user(v: IUser) {
        this._user = v;
    }

    public isAuthorized(neededRole: string): boolean {
            return this.user.roles.indexOf(neededRole) >= 0;
    }

    public isAuthorizedAsync(neededRole: string, cb: CallBack): boolean {
            setTimeout( () => {
                cb(this.user.roles.indexOf(neededRole) >= 0);
            }, 0);
            return this.user.roles.indexOf(neededRole) >= 0;
    }

    public find(arg: { token: string }): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (arg && arg.token === 'validToken') {
                return resolve(true);
            }
            reject(new Error(`Was an invalid token.`));
        });
    }
    public getIndex(req: object, res: any) {
        res.render('index');
    }
}
