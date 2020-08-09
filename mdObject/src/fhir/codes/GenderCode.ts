/*
 * Comply with https://www.hl7.org/fhir/valueset-administrative-gender.html
 * The full fhir support expected in version 3 and above
 */
export enum GenderCode {
    male = 'male',
    female = 'female',
    other = 'other',
    unknown ='unknown'
}