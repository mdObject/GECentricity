import { User } from '../../classes';
import { mockResultEmr } from '../mocks/mocks';
import { UserCallFunction } from '../../enums/enums';

describe('Class: User', () => {

    let component: User;
    let result: string = mockResultEmr;

    describe('right value', () => {
        describe('callFunction === UserCallFunction.UserInfo', () => {
            beforeAll(() => {
                component = new User(result, UserCallFunction.UserInfo);
            });

            it('check loginName', () => { expect(component.loginName).toEqual('0.0'); })
            it('check searchName', () => { expect(component.searchName).toEqual('0.1'); })
            it('check phoneNumber', () => { expect(component.phoneNumber).toEqual('0.2'); })
            it('check homeLocation', () => { expect(component.homeLocation).toEqual('0.3'); })
            it('check group', () => { expect(component.group).toEqual('0.4'); })
            it('check jobTitle', () => { expect(component.jobTitle).toEqual('0.5'); })
            it('check specialty', () => { expect(component.specialty).toEqual('0.6'); })
            it('check roles', () => { expect(component.roles).toEqual(['0.7']); })
            it('check npi', () => { expect(component.npi).toEqual('0.8'); })
            it('check prescriberId', () => { expect(component.prescriberId).toEqual('0.9'); })
            it('check deaId', () => { expect(component.deaId).toEqual('0.10'); })
            it('check stateLicenceId', () => { expect(component.stateLicenceId).toEqual('0.11'); })
            it('check memberLogin', () => { expect(component.memberLogin).toEqual('0.12'); })
            it('check data2000', () => { expect(component.data2000).toEqual('0.13'); })
            it('check uniquePhysicianId', () => { expect(component.uniquePhysicianId).toEqual('0.14'); })
            it('check activationDate', () => { expect(component.activationDate).toEqual('0.15'); })
            it('check expirationDate', () => { expect(component.expirationDate).toEqual('0.16'); })
            it('check currentLocation', () => { expect(component.currentLocation).toEqual('0.17'); })
            it('check firstName', () => { expect(component.firstName).toEqual('0.18'); })
            it('check middleName', () => { expect(component.middleName).toEqual('0.19'); })
            it('check lastName', () => { expect(component.lastName).toEqual('0.20'); })
        })
        describe('callFunction === UserCallFunction.UserList', () => {
            beforeAll(() => {
                component = new User(result, UserCallFunction.UserList);
            });

            it('check loginName', () => { expect(component.loginName).toEqual('0.0'); })
            it('check searchName', () => { expect(component.searchName).toEqual('0.1'); })
            it('check phoneNumber', () => { expect(component.phoneNumber).toEqual('0.2'); })
            it('check homeLocation', () => { expect(component.homeLocation).toEqual('0.3'); })
            it('check group', () => { expect(component.group).toEqual('0.4'); })
            it('check jobTitle', () => { expect(component.jobTitle).toEqual('0.5'); })
            it('check specialty', () => { expect(component.specialty).toEqual('0.6'); })
            it('check npi', () => { expect(component.npi).toEqual('0.7'); })
            it('check prescriberId', () => { expect(component.prescriberId).toEqual('0.8'); })
            it('check deaId', () => { expect(component.deaId).toEqual('0.9'); })
            it('check stateLicenceId', () => { expect(component.stateLicenceId).toEqual('0.10'); })
            it('check memberLogin', () => { expect(component.memberLogin).toEqual('0.11'); })
            it('check data2000', () => { expect(component.data2000).toEqual('0.12'); })
            it('check uniquePhysicianId', () => { expect(component.uniquePhysicianId).toEqual('0.13'); })
            it('check activationDate', () => { expect(component.activationDate).toEqual('0.14'); })
            it('check expirationDate', () => { expect(component.expirationDate).toEqual('0.15'); })
            it('check roles', () => { expect(component.roles).toEqual([]); })
        })

    })

    describe('default value', () => {
        describe('callFunction === UserCallFunction.UserInfo', () => {
            beforeAll(() => {
                component = new User('', UserCallFunction.UserInfo);
            });

            it('check loginName', () => { expect(component.loginName).toEqual(''); })
            it('check searchName', () => { expect(component.searchName).toEqual(''); })
            it('check phoneNumber', () => { expect(component.phoneNumber).toEqual(''); })
            it('check homeLocation', () => { expect(component.homeLocation).toEqual(''); })
            it('check group', () => { expect(component.group).toEqual(''); })
            it('check jobTitle', () => { expect(component.jobTitle).toEqual(''); })
            it('check specialty', () => { expect(component.specialty).toEqual(''); })
            it('check roles', () => { expect(component.roles).toEqual([]); })
            it('check npi', () => { expect(component.npi).toEqual(''); })
            it('check prescriberId', () => { expect(component.prescriberId).toEqual(''); })
            it('check deaId', () => { expect(component.deaId).toEqual(''); })
            it('check stateLicenceId', () => { expect(component.stateLicenceId).toEqual(''); })
            it('check memberLogin', () => { expect(component.memberLogin).toEqual(''); })
            it('check data2000', () => { expect(component.data2000).toEqual(''); })
            it('check uniquePhysicianId', () => { expect(component.uniquePhysicianId).toEqual(''); })
            it('check activationDate', () => { expect(component.activationDate).toEqual(''); })
            it('check expirationDate', () => { expect(component.expirationDate).toEqual(''); })
            it('check currentLocation', () => { expect(component.currentLocation).toEqual(''); })
            it('check firstName', () => { expect(component.firstName).toEqual(''); })
            it('check middleName', () => { expect(component.middleName).toEqual(''); })
            it('check lastName', () => { expect(component.lastName).toEqual(''); })
        })
        describe('callFunction === UserCallFunction.UserList', () => {
            beforeAll(() => {
                component = new User('', UserCallFunction.UserList);
            });

            it('check loginName', () => { expect(component.loginName).toEqual(''); })
            it('check searchName', () => { expect(component.searchName).toEqual(''); })
            it('check phoneNumber', () => { expect(component.phoneNumber).toEqual(''); })
            it('check homeLocation', () => { expect(component.homeLocation).toEqual(''); })
            it('check group', () => { expect(component.group).toEqual(''); })
            it('check jobTitle', () => { expect(component.jobTitle).toEqual(''); })
            it('check specialty', () => { expect(component.specialty).toEqual(''); })
            it('check npi', () => { expect(component.npi).toEqual(''); })
            it('check prescriberId', () => { expect(component.prescriberId).toEqual(''); })
            it('check deaId', () => { expect(component.deaId).toEqual(''); })
            it('check stateLicenceId', () => { expect(component.stateLicenceId).toEqual(''); })
            it('check memberLogin', () => { expect(component.memberLogin).toEqual(''); })
            it('check data2000', () => { expect(component.data2000).toEqual(''); })
            it('check uniquePhysicianId', () => { expect(component.uniquePhysicianId).toEqual(''); })
            it('check activationDate', () => { expect(component.activationDate).toEqual(''); })
            it('check expirationDate', () => { expect(component.expirationDate).toEqual(''); })
            it('check roles', () => { expect(component.roles).toEqual([]); })
        })
    })

    describe('methods', () => {
        beforeEach(() => {
            component = new User(result, UserCallFunction.UserList);
        })
        it('toMelString', () => {
            let _result = component.toMelString()
            expect(_result).toEqual(component._value);
        })
    })
})