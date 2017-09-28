//
import { CarePlan } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: CarePlan', () => {
    let component: CarePlan;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('right value', () => {
        beforeAll(() => {
            component = new CarePlan(result, mockEmrMel as any);
        });

        it('check carePlanId', () => {
            expect(component.carePlanId).toEqual('0.0');
        });
        it('check goal', () => {
            expect(component.goal).toEqual('0.1');
        });
        it('check snomedCTCode', () => {
            expect(component.snomedCTCode).toEqual('0.2');
        });
        it('check target', () => {
            expect(component.target).toEqual('0.3');
        });
        it('check instructions', () => {
            expect(component.instructions).toEqual('0.4');
        });
        it('check goalSetDate', () => {
            expect(component.goalSetDate).toEqual('0.5');
        });
        it('check goalMetDate', () => {
            expect(component.goalMetDate).toEqual('0.6');
        });
        it('check recordCreatedDateTime', () => {
            expect(component.recordCreatedDateTime).toEqual('0.7');
        });
        it('check sign', () => {
            expect(component.sign).toEqual('0.8');
        });
        it('check signedBy', () => {
            expect(component.signedBy).toEqual('0.9');
        });
        it('check signedDate', () => {
            expect(component.signedDate).toEqual('0.10');
        });
        it('check recordChangedDateTime', () => {
            expect(component.recordChangedDateTime).toEqual('0.11');
        });
        it('check recordChangedBy', () => {
            expect(component.recordChangedBy).toEqual('0.12');
        });
        it('check patientConditionDescription', () => {
            expect(component.patientConditionDescription).toEqual('0.13');
        });
        it('check patientConditionCode', () => {
            expect(component.patientConditionCode).toEqual('0.14');
        });
    })

    describe('wrong value to equal ""', () => {
        beforeAll(() => {
            component = new CarePlan('', mockEmrMel as any);
        });

        it('check carePlanId', () => {
            expect(component.carePlanId).toEqual('');
        });
        it('check goal', () => {
            expect(component.goal).toEqual('');
        });
        it('check snomedCTCode', () => {
            expect(component.snomedCTCode).toEqual('');
        });
        it('check target', () => {
            expect(component.target).toEqual('');
        });
        it('check instructions', () => {
            expect(component.instructions).toEqual('');
        });
        it('check goalSetDate', () => {
            expect(component.goalSetDate).toEqual('');
        });
        it('check goalMetDate', () => {
            expect(component.goalMetDate).toEqual('');
        });
        it('check recordCreatedDateTime', () => {
            expect(component.recordCreatedDateTime).toEqual('');
        });
        it('check sign', () => {
            expect(component.sign).toEqual('');
        });
        it('check signedBy', () => {
            expect(component.signedBy).toEqual('');
        });
        it('check signedDate', () => {
            expect(component.signedDate).toEqual('');
        });
        it('check recordChangedDateTime', () => {
            expect(component.recordChangedDateTime).toEqual('');
        });
        it('check recordChangedBy', () => {
            expect(component.recordChangedBy).toEqual('');
        });
        it('check patientConditionDescription', () => {
            expect(component.patientConditionDescription).toEqual('');
        });
        it('check patientConditionCode', () => {
            expect(component.patientConditionCode).toEqual('');
        });
    })

    describe('methods', () => {

        beforeEach(() => {
            component = new CarePlan(result, mockEmrMel as any);
        })

        describe('save', () => {

            beforeEach(() => {
                component = new CarePlan(null, mockEmrMel as any);
                spyOn(component, 'toStringAdd')
                    .and
                    .returnValue('');
                spyOn(component, 'carePlanAddError')
                    .and
                    .returnValue('');
            })

            describe('success validateAdd', () => {
                it('success melFunc', () => {
                    spyOn(mockEmrMel, 'melFunc')
                        .and
                        .returnValue(1);
                    spyOn(component, 'validateAdd')
                        .and
                        .returnValue('');
                    component.save();
                    expect(component.validateAdd).toHaveBeenCalled()
                    expect(component.carePlanAddError).not.toHaveBeenCalled()
                    expect(mockEmrMel.melFunc).toHaveBeenCalled()
                })
                it('error melFunc', () => {
                    spyOn(mockEmrMel, 'melFunc')
                        .and
                        .returnValue(-1);
                    spyOn(component, 'validateAdd')
                        .and
                        .returnValue('');
                    component.save();
                    expect(component.validateAdd).toHaveBeenCalled()
                    expect(component.carePlanAddError).toHaveBeenCalled()
                    expect(mockEmrMel.melFunc).toHaveBeenCalled()
                })
            })
            it('error validateAdd', () => {
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(1);
                spyOn(component, 'validateAdd')
                    .and
                    .returnValue('123');
                component.save();
                expect(component.validateAdd).toHaveBeenCalled()
                expect(mockEmrMel.melFunc).not.toHaveBeenCalled()
            })
        })



        it('toMelString', () => {
            let _result = component.toMelString();
            expect(_result).toEqual(result);
        });
        describe('validateAdd', () => {
            it('to be success', () => {
                component = new CarePlan(result, mockEmrMel as any);
                let _result = component.validateAdd();
                expect(_result).toEqual('');
            });
            it('to be error', () => {
                component = new CarePlan('', mockEmrMel as any);
                let _result = component.validateAdd();
                expect(_result).toEqual('goal is required.');
            });
        })
        it('toStringAdd', () => {
            let _result = component.toStringAdd();
            let __result = '\"' + component.goal + '\",\"' +
                component.snomedCTCode + '\",\"' +
                component.target + '\",\"' +
                component.instructions + '\",\"' +
                component.goalSetDate + '\",\"' +
                component.goalMetDate + '\",\"' +
                component.patientConditionCode + '\"';
            expect(_result).toEqual(__result);
        });
        describe('carePlanAddError', () => {
            it('code -1', () => {
                let _result = component.carePlanAddError('-1');
                expect(_result.indexOf('Error Code -1:') > -1).toEqual(true);
            });
            it('code -2', () => {
                let _result = component.carePlanAddError('-2');
                expect(_result.indexOf('Error Code -2:') > -1).toEqual(true);
            });
            it('code -3', () => {
                let _result = component.carePlanAddError('-3');
                expect(_result.indexOf('Error Code -3:') > -1).toEqual(true);
            });
            it('code -4', () => {
                let _result = component.carePlanAddError('-4');
                expect(_result.indexOf('Error Code -4:') > -1).toEqual(true);
            });
            it('code -5', () => {
                let _result = component.carePlanAddError('-5');
                expect(_result.indexOf('Error Code -5:') > -1).toEqual(true);
            });
            it('code -6', () => {
                let _result = component.carePlanAddError('-6');
                expect(_result.indexOf('Error Code -6:') > -1).toEqual(true);
            });
            it('code -7', () => {
                let _result = component.carePlanAddError('-7');
                expect(_result.indexOf('Error Code -7:') > -1).toEqual(true);
            });
            it('code -8', () => {
                let _result = component.carePlanAddError('-8');
                expect(_result.indexOf('Error Code -8:') > -1).toEqual(true);
            });
            it('code -21', () => {
                let _result = component.carePlanAddError('-21');
                expect(_result.indexOf('Error Code -21:') > -1).toEqual(true);
            });
        })
    })
})