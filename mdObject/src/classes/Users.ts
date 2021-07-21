import { User } from './User';
import { EmrMel } from './EmrMel';
import { StringInternal, GetCurrentUser } from '../factories/factories';
import { UserCallFunction } from '../enums';
import { IArrayAdditionalMethods } from '../interfaces';

export class Users {

    private _currentUser: User;
    private _user: User;
    private _users: string;
    private _usersArray: IArrayAdditionalMethods<User> = [];

    constructor(
        public _mel: EmrMel
    ) { }

    getUser = (value?: string) => {
        if (value != null) {
            this._user = (this._user != null) ? this._user : new User(this._mel.melFunc('{GETUSERINFO("' + value + '")}'), UserCallFunction.UserInfo);
            return this._user;
        }
        this._currentUser = (this._currentUser != null) ? this._currentUser : new User(GetCurrentUser(this._mel), UserCallFunction.UserInfo);
        return this._currentUser;
    }

    getUsers = () => {
        if (this._usersArray.length === 0) {
            this._users = this._mel.melFunc('{GET_USER_LIST(USER.CURLOCATIONABBREVNAME, "", "delimited", true)}');
            let dataArray = StringInternal(this._users).toList();

            /*jslint plusplus: true */
            for (let index = 0; index < dataArray.length; index++) {
                this._usersArray.push(new User(dataArray[index], UserCallFunction.UserList));
            }

            this._usersArray.tag = 'GET_USER_LIST';

            this._usersArray.toMelString = () => {
                return this._users;
            }
        }
        return this._usersArray;
    }
}