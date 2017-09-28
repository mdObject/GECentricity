//
import { ClinicalDocument } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: ClinicalDocument', () => {
    let component: ClinicalDocument;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('caches', () => {
        beforeAll(() => {
            component = new ClinicalDocument(mockEmrMel as any);
            component.letiables;
            component.did;
            component.xid;
            component.documentId;
            component.status;
            component.location;
            component.dateOfUpdate;
            component.provider;
            component.userLoginName;
        });

        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        describe('letiables', () => {
            it('getting from cache', () => {
                component.letiables;
                expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
            });
            it('setting from cache', () => {
                component.letiables = { qwe: 'qwe' } as any;
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.mdObject_letiables = "' +
                    JSON.stringify((component as any).rawValue).replace(/"/g, '\\"') + '"}');
            });
        })
        it('getting did from cache', () => {
            component.did;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting xid from cache', () => {
            component.xid;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting documentId from cache', () => {
            component.documentId;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting status from cache', () => {
            component.status;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting location from cache', () => {
            component.location;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting dateOfUpdate from cache', () => {
            component.dateOfUpdate;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting provider from cache', () => {
            component.provider;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting userLoginName from cache', () => {
            component.userLoginName;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
    });

    describe('no caches', () => {
        beforeEach(() => {
            component = new ClinicalDocument(mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting letiables from melFunc', () => {
            component.letiables;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.mdObject_letiables}');
        });
        it('getting did from melFunc', () => {
            component.did;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{find("DOCUMENT","DID")}');
        });
        it('getting xid from melFunc', () => {
            component.xid;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.XID}');
        });
        it('getting documentId from melFunc', () => {
            component.documentId;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.VISDOCID}');
        });
        it('getting status from melFunc', () => {
            component.status;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.STATUS}');
        });
        it('getting location from melFunc', () => {
            component.location;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.LOCOFCARENAME}');
        });
        it('getting dateOfUpdate from melFunc', () => {
            component.dateOfUpdate;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.CLINICALDATE}');
        });
        it('getting provider from melFunc', () => {
            component.provider;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.PROVIDER}');
        });
        it('getting userLoginName from melFunc', () => {
            component.userLoginName;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.USERLOGINNAME}');
        });
    });

    describe('methods', () => {
        beforeAll(() => {
            component = new ClinicalDocument(mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('save', () => {
            (component as any).save();
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.mdObject_letiables = "' +
                JSON.stringify((component as any).rawValue).replace(/"/g, '\\"') + '"}');
        })
        describe('val', () => {
            it('with value', () => {
                component.val('qwe', 'qwe');
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.' + 'qwe' + '="' + 'qwe' + '"}');
            })
            it('without value', () => {
                component.val('qwe', null);
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{DOCUMENT.' + 'qwe' + '}');
            })
        })
    })

})