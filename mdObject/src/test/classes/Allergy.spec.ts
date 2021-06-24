import { Allergy } from "../../classes";
import { MockEmrMel } from "../mocks/mocks";
import { AllergyClassification, AllergyCriticality, ObjectState } from "../../enums/enums";

describe('Class: Allergy', () => {

    let component: Allergy;
    let mockEmrMel = new MockEmrMel();

    beforeAll(() => {
        component = new Allergy(mockEmrMel);
    });

    describe('save', () => {
        beforeAll(() => {
            component.classification = AllergyClassification.food;
            component.criticalIndicator = AllergyCriticality.severe;
            component.name = 'Seafood';
            component.onSetDate = new Date('1999-12-31T22:00:00.000Z');
            component.description = 'Red skin';
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue('');
        });

        it('Object state not set', () => {
            component.state = ObjectState.None;
            component.save();
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();

        });

        it('Object state set to add', () => {
            component.state = ObjectState.Add;
            component.save();
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{MEL_ADD_ALLERGY("' + (component as any).toAddString() + '")}');
        });
    });
})