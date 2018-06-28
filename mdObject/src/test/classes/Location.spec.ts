import { Location } from '../../classes/classes';
import { LocationType } from '../../enums/enums';

describe('Class: Location', () => {

    let component: Location;
    let locationId = 'qwe';
    let name = 'asd';

    beforeAll(() => {
        component = new Location(locationId, name, LocationType.Current)
    })

    describe('right value', () => {
        it('check name', () => {
            expect(component.id).toEqual(locationId);
        });
        it('check onDate', () => {
            expect(component.name).toEqual(name);
        });
        it('check classification', () => {
            expect(component.locationType).toEqual(LocationType.Current);
        });
    })

    describe('default value', () => {
        beforeAll(() => {
            component = new Location(null, null, null)
        })

        it('check name', () => {
            expect(component.id).toEqual('');
        });
        it('check onDate', () => {
            expect(component.name).toEqual('');
        });
        it('check classification', () => {
            expect(component.locationType).toEqual(LocationType.None);
        });
    })
})