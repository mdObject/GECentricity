## Note
The * indicates changes that break backward compatibility. See https://docs.npmjs.com/about-semantic-versioning for more about product versioning.  
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
