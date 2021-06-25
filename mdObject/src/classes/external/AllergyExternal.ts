import { UserDetailExternal } from './UserDetailExternal';
import { System } from '../System';

export class AllergyExternal {
    allclass: string; //IAllergyData.classification.substr(0,1) See: AllergyClassCode
    allergyGroupID: number;
    allergyGroupIDSpecified: boolean;
    allergyID: number;
    annotate: any;
    aproxonsetdate: any;
    change: number; //4 - deleted; 6 - added; 2 - current
    changeSpecified: boolean;
    dbCreateDate: Date;
    dbCreateDateSpecified: boolean;
    dbUpdatedDate: Date;
    dbUpdatedDateSpecified: boolean;
    description: string; //IAllergyData.description
    documentDetail: any;
    drugDescID: number;
    drugDescIDSpecified: boolean;
    errorDetails: any;
    expirationID: number;
    extAllergyID: number;
    extAllergyIDSpecified: boolean;
    externalAllergyInfoDetail: any;
    genericProductIndex: any;
    gi: any;
    heme: any;
    iscritical: string;
    kind: any;
    knowledgeBaseDrugCode: string;
    knowledgeBaseDrugCodeSpecified: boolean;
    medicationInfo: any;
    name: string; //IAllergyData.name
    ndclabprod: any;
    ndcpackage: any;
    onsetdate: Date; //IAllergyData.onSetDate
    onsetdateSpecified: boolean;
    other: any;
    pendUserIndent: number;
    pendUserIndentSpecified: boolean;
    pendUserSort: number;
    pendUserSortSpecified: boolean;
    personID: number;
    pubtime: number;
    pubtimeSpecified: boolean;
    pubUser: number;
    pubUserDetail: UserDetailExternal;
    pubUserSpecified: boolean;
    rash: any;
    resp: any;
    result: number;
    resultSpecified: boolean;
    searchCriteria: any;
    secondaryDocumentID: number;
    secondaryDocumentIDSpecified: boolean;
    severity: any;
    shock: any;
    snomedID: number;
    snomedIDSpecified: boolean;
    stopdate: Date; //IAllergyData.stopDate
    stopdateSpecified: boolean;
    stopreason: any;
    userDetail: UserDetailExternal;
    userID: number;
    userIDSpecified: boolean;
    userIndent: number;
    userIndentSpecified: boolean;
    userSort: number;
    userSortSpecified: boolean;

    constructor(
        _obj: any
    ) {
        this.allclass = _obj.allclass;
        this.allergyGroupID = _obj.allergyGroupID;
        this.allergyGroupIDSpecified = _obj.allergyGroupIDSpecified;
        this.allergyID = _obj.allergyID;
        this.annotate = _obj.annotate;
        this.aproxonsetdate = _obj.aproxonsetdate;
        this.change = _obj.change;
        this.changeSpecified = _obj.changeSpecified;
        this.dbCreateDate = System.toDate(_obj.dbCreateDate);
        this.dbCreateDateSpecified = _obj.dbCreateDateSpecified;
        this.dbUpdatedDate = System.toDate(_obj.dbUpdatedDate);
        this.dbUpdatedDateSpecified = _obj.dbUpdatedDateSpecified;
        this.description = _obj.description;
        this.documentDetail = _obj.documentDetail;
        this.drugDescID = _obj.drugDescID;
        this.drugDescIDSpecified = _obj.drugDescIDSpecified;
        this.errorDetails = _obj.errorDetails;
        this.expirationID = _obj.expirationID;
        this.extAllergyID = _obj.extAllergyID;
        this.extAllergyIDSpecified = _obj.extAllergyIDSpecified;
        this.externalAllergyInfoDetail = _obj.externalAllergyInfoDetail;
        this.genericProductIndex = _obj.genericProductIndex;
        this.gi = _obj.gi;
        this.heme = _obj.heme;
        this.iscritical = _obj.iscritical;
        this.kind = _obj.kind;
        this.knowledgeBaseDrugCode = _obj.knowledgeBaseDrugCode;
        this.knowledgeBaseDrugCodeSpecified = _obj.knowledgeBaseDrugCodeSpecified;
        this.medicationInfo = _obj.medicationInfo;
        this.name = _obj.name;
        this.ndclabprod = _obj.ndclabprod;
        this.ndcpackage = _obj.ndcpackage;
        this.onsetdate = System.toDate(_obj.onsetdate);
        this.onsetdateSpecified = _obj.onsetdateSpecified;
        this.other = _obj.other;
        this.pendUserIndent = _obj.pendUserIndent;
        this.pendUserIndentSpecified = _obj.pendUserIndentSpecified;
        this.pendUserSort = _obj.pendUserSort;
        this.pendUserSortSpecified = _obj.pendUserSortSpecified;
        this.personID = _obj.personID;
        this.pubtime = _obj.pubtime;
        this.pubtimeSpecified = _obj.pubtimeSpecified;
        this.pubUser = _obj.pubUser;
        this.pubUserDetail = UserDetailExternal.fromExternal(_obj.pubUserDetail);
        this.pubUserSpecified = _obj.pubUserSpecified;
        this.rash = _obj.rash;
        this.resp = _obj.resp;
        this.result = _obj.result;
        this.resultSpecified = _obj.resultSpecified;
        this.searchCriteria = _obj.searchCriteria;
        this.secondaryDocumentID = _obj.secondaryDocumentID;
        this.secondaryDocumentIDSpecified = _obj.secondaryDocumentIDSpecified;
        this.severity = _obj.severity;
        this.shock = _obj.shock;
        this.snomedID = _obj.snomedID;
        this.snomedIDSpecified = _obj.snomedIDSpecified;
        this.stopdate = System.toDate(_obj.stopdate);
        this.stopdateSpecified = _obj.stopdateSpecified;
        this.stopreason = _obj.stopreason;
        this.userDetail = UserDetailExternal.fromExternal(_obj.userDetail);
        this.userID = _obj.userID;
        this.userIDSpecified = _obj.userIDSpecified;
        this.userIndent = _obj.userIndent;
        this.userIndentSpecified = _obj.userIndentSpecified;
        this.userSort = _obj.userSort;
        this.userSortSpecified = _obj.userSortSpecified;
    }
}