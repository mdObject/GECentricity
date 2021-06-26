import { Users, User } from '../../classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: Users', () => {

    let component: Users;
    let mockEmrMel = new MockEmrMel();
    let result = mockResultEmr;
    let name = 'name';

    describe('methods', () => {
        beforeEach(() => {
            component = new Users(mockEmrMel as any);
        });

        describe('getUser', () => {
            describe('from cache', () => {
                it('with value', () => {
                    component.getUser(name);
                    spyOn(mockEmrMel, 'melFunc')
                        .and
                        .returnValue('');
                    let _result = component.getUser(name);
                    expect(_result instanceof User).toEqual(true);
                    expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
                });
                it('without value', () => {
                    component.getUser();
                    spyOn(mockEmrMel, 'melFunc')
                        .and
                        .returnValue('');
                    let _result = component.getUser();
                    expect(_result instanceof User).toEqual(true);
                    expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
                });
            })
            describe('from mel', () => {
                beforeEach(() => {
                    spyOn(mockEmrMel, 'melFunc')
                        .and
                        .returnValue('');
                });
                it('with value', () => {
                    let _result = component.getUser(name);
                    expect(_result instanceof User).toEqual(true);
                    expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{GETUSERINFO("' + name + '")}')
                });
                it('without value', () => {
                    let _result = component.getUser();
                    expect(_result instanceof User).toEqual(true);
                    expect(mockEmrMel.melFunc).toHaveBeenCalledTimes(6);
                });
            })
        })
        describe('getUsers', () => {
            it('from cache', () => {
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(result + '|' + result);
                component.getUsers(); // add to cache
                spyOn((component as any)._usersArray, 'push');
                let _result = component.getUsers(); // getting from cache
                expect(Array.isArray(_result)).toEqual(true);
                expect(_result.length).toEqual(2)
                expect((component as any)._usersArray.push).not.toHaveBeenCalled();
                expect(_result.tag).toEqual('GET_USER_LIST');
                expect(_result.toMelString()).toEqual(result + '|' + result);
            })
            it('from mel', () => {
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(result + '|' + result);
                let _result = component.getUsers();
                expect(Array.isArray(_result)).toEqual(true);
                expect(_result.length).toEqual(2)
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{GET_USER_LIST(USER.CURLOCATIONABBREVNAME, "", "delimited", true)}');
                expect(_result.tag).toEqual('GET_USER_LIST');
                expect(_result.toMelString()).toEqual(result + '|' + result);
            })
        })
    });
})