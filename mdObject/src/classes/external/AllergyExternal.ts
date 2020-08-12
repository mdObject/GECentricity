import { UserDetailExternal } from "./UserDetailExternal";
import { System } from "../system";

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

    static fromExternal(
        _obj: any
    ): AllergyExternal {
        let allergyExternal = new AllergyExternal();
        allergyExternal.allclass = _obj.allclass;
        allergyExternal.allergyGroupID = _obj.allergyGroupID;
        allergyExternal.allergyGroupIDSpecified = _obj.allergyGroupIDSpecified;
        allergyExternal.allergyID = _obj.allergyID;
        allergyExternal.annotate = _obj.annotate;
        allergyExternal.aproxonsetdate = _obj.aproxonsetdate;
        allergyExternal.change = _obj.change;
        allergyExternal.changeSpecified = _obj.changeSpecified;
        allergyExternal.dbCreateDate = System.toDate(_obj.dbCreateDate);
        allergyExternal.dbCreateDateSpecified = _obj.dbCreateDateSpecified;
        allergyExternal.dbUpdatedDate = System.toDate(_obj.dbUpdatedDate);
        allergyExternal.dbUpdatedDateSpecified = _obj.dbUpdatedDateSpecified;
        allergyExternal.description = _obj.description;
        allergyExternal.documentDetail = _obj.documentDetail;
        allergyExternal.drugDescID = _obj.drugDescID;
        allergyExternal.drugDescIDSpecified = _obj.drugDescIDSpecified;
        allergyExternal.errorDetails = _obj.errorDetails;
        allergyExternal.expirationID = _obj.expirationID;
        allergyExternal.extAllergyID = _obj.extAllergyID;
        allergyExternal.extAllergyIDSpecified = _obj.extAllergyIDSpecified;
        allergyExternal.externalAllergyInfoDetail = _obj.externalAllergyInfoDetail;
        allergyExternal.genericProductIndex = _obj.genericProductIndex;
        allergyExternal.gi = _obj.gi;
        allergyExternal.heme = _obj.heme;
        allergyExternal.iscritical = _obj.iscritical;
        allergyExternal.kind = _obj.kind;
        allergyExternal.knowledgeBaseDrugCode = _obj.knowledgeBaseDrugCode;
        allergyExternal.knowledgeBaseDrugCodeSpecified = _obj.knowledgeBaseDrugCodeSpecified;
        allergyExternal.medicationInfo = _obj.medicationInfo;
        allergyExternal.name = _obj.name;
        allergyExternal.ndclabprod = _obj.ndclabprod;
        allergyExternal.ndcpackage = _obj.ndcpackage;
        allergyExternal.onsetdate = System.toDate(_obj.onsetdate);
        allergyExternal.onsetdateSpecified = _obj.onsetdateSpecified;
        allergyExternal.other = _obj.other;
        allergyExternal.pendUserIndent = _obj.pendUserIndent;
        allergyExternal.pendUserIndentSpecified = _obj.pendUserIndentSpecified;
        allergyExternal.pendUserSort = _obj.pendUserSort;
        allergyExternal.pendUserSortSpecified = _obj.pendUserSortSpecified;
        allergyExternal.personID = _obj.personID;
        allergyExternal.pubtime = _obj.pubtime;
        allergyExternal.pubtimeSpecified = _obj.pubtimeSpecified;
        allergyExternal.pubUser = _obj.pubUser;
        allergyExternal.pubUserDetail = UserDetailExternal.fromExternal(_obj.pubUserDetail);
        allergyExternal.pubUserSpecified = _obj.pubUserSpecified;
        allergyExternal.rash = _obj.rash;
        allergyExternal.resp = _obj.resp;
        allergyExternal.result = _obj.result;
        allergyExternal.resultSpecified = _obj.resultSpecified;
        allergyExternal.searchCriteria = _obj.searchCriteria;
        allergyExternal.secondaryDocumentID = _obj.secondaryDocumentID;
        allergyExternal.secondaryDocumentIDSpecified = _obj.secondaryDocumentIDSpecified;
        allergyExternal.severity = _obj.severity;
        allergyExternal.shock = _obj.shock;
        allergyExternal.snomedID = _obj.snomedID;
        allergyExternal.snomedIDSpecified = _obj.snomedIDSpecified;
        allergyExternal.stopdate = System.toDate(_obj.stopdate);
        allergyExternal.stopdateSpecified = _obj.stopdateSpecified;
        allergyExternal.stopreason = _obj.stopreason;
        allergyExternal.userDetail = UserDetailExternal.fromExternal(_obj.userDetail);
        allergyExternal.userID = _obj.userID;
        allergyExternal.userIDSpecified = _obj.userIDSpecified;
        allergyExternal.userIndent = _obj.userIndent;
        allergyExternal.userIndentSpecified = _obj.userIndentSpecified;
        allergyExternal.userSort = _obj.userSort;
        allergyExternal.userSortSpecified = _obj.userSortSpecified;

        return allergyExternal;
    }
}