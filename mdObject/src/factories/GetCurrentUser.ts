//
import { EmrMel } from '../classes/classes';

export function GetCurrentUser(_mel: EmrMel) {
    return _mel.melFunc('{GETUSERINFO("' + _mel.melFunc('{USER.LOGINNAME}') + '")}') + '^' +
        _mel.melFunc('{USER.CURLOCATIONNAME}') + '^' +
        _mel.melFunc('{USER.FIRSTNAME}') + '^' +
        _mel.melFunc('{USER.MIDDLENAME}') + '^' +
        _mel.melFunc('{USER.LASTNAME}');
}
