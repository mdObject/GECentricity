## Note
The * indicates changes that break backward compatibility. See https://docs.npmjs.com/about-semantic-versioning for more about product versioning.  
## Release 2.0.0-alpha.1.1
	Updated license year.
	* Replaced [name]Export to [name]External

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
