/// <reference path="$mdobject.objectbase.d.ts" />
/// <reference path="$mdobject.address.d.ts" />
/// <reference path="$mdobject.phone.d.ts" />
declare namespace $mdObject.Interfaces {
    interface IPatient {
        /** Returns the patient’s ID number */
        patientId: string;
        /** Returns the internal PID number for patient record */
        pid: string;
        /** Returns the patient’s medical record number. */
        medicalRecordId: string;
        /** Returns the patient’s ID from an external system, such as a billing or lab system */
        externalId: string;
        /** Returns the preferred patient ID number for printed materials. */
        printId: string;
        /** Returns the patient’s Social Security number. */
        ssn: string;
        /** Returns the patient’s first name. */
        firstName: string;
        /** Returns the patient’s last name. */
        lastName: string;
        /** Returns the patient’s middle name. */
        middleName: string;
        /** Returns the patient’s full name formatted as follows: title first middle last, suffix */
        labelName: string;
        /** Name Prefix */
        namePrefix: string;
        /** Name Suffix */
        nameSuffix: string;
        /** Represent patient address object */
        address: IAddress;
        /** Patient’s sex. */
        sex: string;
        /** Patient’s race */
        race: string;
        /** Patient’s ethnicity */
        ethnicity: string;
        /** Returns the patient’s marital status (Single, Married, Divorced, Widowed, Separated, Other or Undetermined) */
        maritalStatus: string;
        /** Returns the patient’s preferred language */
        language: string;
        phone: IPhone;
        /** Returns the patient’s e-mail address */
        email: string;
        /** Returns the patient’s contact by information */
        contactBy: string;
        /** Returns the patient’s employment status. */
        employmentStatus: string;
        /** Patient’s current status in the clinic */
        clinicStatus: string;
        /** List of patient immunizations  */
        immunizations: IImmunization[];
    }
}
declare namespace $mdObject {
    var patient: Interfaces.IPatient;
}
