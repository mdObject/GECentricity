## Note
The * indicates changes that break backward compatibility. See https://docs.npmjs.com/about-semantic-versioning for more about product versioning.  
## Release 2.0.0-alpha.2.4
	Added implementation for Problem.save()
	New abstract EmrObject<T> added.
	Problem extends EmrObject<Problem>
	Added sample for FHIR Conditions.
	Added FHIR implementation for types.
	Added FHIR Bundle, BundleTypeCode, EntryBundle, Search, Signature object.

## Release 2.0.0-alpha.2.3
	Added export EmrContents class.
	Update demo to output data from EmrContents
	* Problem list marked problems removed during current update with the status: Removed
	Added "PROB_REMOVED" to the simulator demo view
	* The version contant is pulling the version from project.json
	Added About form for the mdObjectAngularDemo project
	* Added Problems filtration. See README.md in the src/classes. Array<T> now is simplified with the status filtration
	* Fhir call removed from mdObject
	New Fhir classes added: Condition, CodeableConcept, Coding, Resource
	Added Problem conversion: ```let problem: Problem = Problem.fromFhir(condition);```
	* The mdObject.emr.melContent is EmrContents type. Set reload to true, to reload content.
	* Problems extends Array<Problem>.
	Fixed angular.js demo. Angular.js is local now.

## Release 2.0.0-alpha.2.2
	Fixed bug with Add Allergy return code.
	Fixed simulator validation.
	Added emrContentsAsync in Emr.
	Added EmrContents an array of EmrContent.
	* Modified EmrContent the "save" method is using the ObjectState enum to control Add/Update/Remove
	* The EmrContent value encoding removed. Use window.btoa(value) to encode a string in base-64. Use window.atob(enc) to decode a base-64 encoded string.
	* The EmrContent "remove" method has been removed. Use the "save" method and indicate ObjectState.
	* The EmrContent key renamed to namespace
	* The EmrContent name renamed to nodeName
	* The EmrContent value renamed to displayName
	* The EmrContent _unk0 renamed to sourceName
	* The EmrContent _unk1 renamed to code
	* The EmrContent _unk2 renamed to codeType
	* The EmrContent _unk3 renamed to contentGroup
	* The EmrContent _unk4 renamed to listOrder
	* The EmrContent _unk5 renamed to contentDefault
	* The EmrContent isNew removed. Use state and status.
	* The EmrContent constructor changed. The _window parameter removed.

## Release 2.0.0-alpha.2.1
	* Fixed issue with compatability with the V20 version
	Fixed mdObjectAngularDemo Allergies drop-down lists.

## Release 2.0.0-alpha.1.9
	* Replace import from "enums/enums" to just "enums"
	* Re-export all classes, enums and interfaces from the root. Use ```import { MdObject, Patient } from '@mdobject/mdobject';```
	The mdObjectAngularDemo using the npm package 2.0.0-alpha.1.9

## Release 2.0.0-alpha.1.8
	Fixed build and casing issues
	Fixed "Circular dependency" issues
	Fixed "Module not found" issues for NPM package
	* Replace import from "classes/classes" to just "classes"
	
## Release 2.0.0-alpha.1.6
	Changed compilation target to es5

## Release 2.0.0-alpha.1.4
	Angular build version upgraded 

## Release 2.0.0-alpha.1.4
	Exported Problems in the '@mdobject/mdobject/classes/classes'
	The mdObjectAngularDemo project is using the reference to npm component 
	Added export classes and enums in public.ts
	Added index.js to classes and enums

## Release 2.0.0-alpha.1.3
    ! This version is NOT compatable with IE10. Use: <meta http-equiv="X-UA-Compatible" content="IE=11" /> 
	Added build-with-mdobject.svg to the library
	Addess async properies to patient object. 
	* For example: in addition to the patient.firstName:string there is a patient.firstNameAsync(): Promise<string>
	* Use: 
    patient: Patient;
	Promise.all([
      patientAsync,
      patientAsync.then(p => p.firstNameAsync()),
      patientAsync.then(p => p.lastNameAsync()),
	  ...
    ]).then(e => { this.patient = e[0]; });
	to get the patient object. See: mdObjectAngularDemo 
	The following async method added to the Patient object:
	* patientIdAsync
	* pidAsync
	* medicalRecordIdAsync
	* externalIdAsync
	* printIdAsync
	* ssnAsync
	* firstNameAsync
	* lastNameAsync
	* middleNameAsync
	* labelNameAsync
	* namePrefixAsync
	* nameSuffixAsync
	* sexAsync
	* dateOfBirthAsync
	* maritalStatusAsync
	* languageAsync
	* emailAsync
	* contactByAsync
	* registrationNoteAsync
	* employmentStatusAsync
	* clinicStatusAsync
	* primaryCarePhysicianNameAsync
	* contactsAsync
	* problemsAsync
	* carePlansAsync

	The following async method added to the Phone object:
	* homeAsync
	* businessAsync
	* mobileAsync
	* faxAsync

	The following async method added to the Alergies object 
	* addedAsync
	* removedAsync
	* currentAsync

	Added demo components:
	* patient-contacts.component
	* simulator-view.component
	* patient-problems.component
	* patient-phone.component

	Added new objects:
	* AllergiesExternal
	* ObjectState
	* ArrayAsync - allows extend generic array with async methods
	* Problems - Array of patient problems

	The Problem, Allergy objects changed. The onsetDate and stopDate are the Date object. 

## Release 2.0.0-alpha.1.2
	The following objects are moved from MdObject to Emr:
	* patient: Patient (use: mdObject.emr.patient)
	* users: Users (use: mdObject.emr.users)
	* clinicalDocument:ClinicalDocument
	* obsTermsMap:ObsTermsMap
	* LocationType: LocationType
	* UserCallFunction: UserCallFunction

	Patient object costractor changed. The weight and height removed. 
	The measurements: Measurements object removed from the Patient. 

	New async in Emr:
	* patientAsync(): Promise<Patient>
	* demographicsAsync(): Promise<DemographicsExternal>
	* externalAsync(): Promise<any>

	Additional features:
	* ActiveX alert message replaced with log notification
	* Added version log output 

	EmrMel and EmrApp have a new constructor parameter: Simulator 
	The old angular.js demo requires the polyfills.js (included in the project). 

## Release 2.0.0-alpha.1.1
	Updated license year.
	* Replaced [name]Export to [name]External
	* Replaced Allergies.onDate to Allergies.onSetDate
	* Replaced Allergies.offDate to Allergies.stopDate

	New objects:
		DemographicsExternal, PersonExternal, IdentifierDomainExternal, IdentifierExternal, PersonAgeExternal, PrimaryProviderRelationshipExternal,
		PrimaryProviderRelationshipItemExternal, ElectronicAddressExternal, InsurancePolicyExternal, AllergyExternal,
		InsuranceSetExternal, InsuranceSetItemExternal, MailingAddressExternal, PayorExternal, UserDetailExternal, 
		Allergy

	New features:
		Add new allergy with the Allergy object. Call save method to save a new allergy.
		Angular 10 demo project.

## Release 2.0.0-alpha.1.0
	Implemented windows external methods: Demographics, BaseServicesUrl 
	Compile library with Angular CLI compiler version 10x
	* Entry point file "bundle.public.min.js" renamed to "mdobject-mdobject.umd.min.js" 
	* Removed: Patient.emr. Use the mdObject.emr
	* Patient constructor removed _document and _window
	New features:
		- New property: 
			Patient.patientPicture
			Patient.lastOfficeVisit


TODO: remove/replace "alert"

## Release 1.1.4
	Added flowsheetObservation to the Patient object

## Release 1.1.3
	Added registrationNote to patient object. Sync version with npm.

## Release 1.1.2 - deprecated versions
