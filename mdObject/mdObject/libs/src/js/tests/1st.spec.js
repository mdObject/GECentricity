/// <reference path="../scripts/$mdobject.mel.ts" />
/// <reference path="typemoq.d.ts" />
var _this = this;
var MelMock = (function () {
    function MelMock() {
        this._noMelData = 'Data Access Error';
        this.melFunc = function (data) { return data; };
    }
    MelMock.prototype.isActiveXSupported = function () {
        return ("ActiveXObject" in window);
    };
    return MelMock;
}());
describe('$mdObject.patient.patientId tests', function () {
    validatePatientStringGetProperty('patientId', '{PATIENT.PATIENTID}');
});
describe('$mdObject.patient.pid tests', function () {
    validatePatientStringGetProperty('pid', '{find("patient", "PID")}');
});
describe('$mdObject.patient.medicalRecordId tests', function () {
    validatePatientStringGetProperty('medicalRecordId', '{PATIENT.MEDRECNO}');
});
describe('$mdObject.patient.externalId tests', function () {
    validatePatientStringGetProperty('externalId', '{PATIENT.EXTERNALID}');
});
describe('$mdObject.patient.printId tests', function () {
    validatePatientStringGetProperty('printId', '{PATIENT.PRINTID}');
});
describe('$mdObject.patient.firstName tests', function () {
    validatePatientStringGetProperty('firstName', '{PATIENT.FIRSTNAME}');
});
describe('$mdObject.patient.lastName tests', function () {
    validatePatientStringGetProperty('lastName', '{PATIENT.LASTNAME}');
});
describe('$mdObject.patient.middleName tests', function () {
    validatePatientStringGetProperty('middleName', '{PATIENT.MIDDLENAME}');
});
describe('$mdObject.patient.labelName tests', function () {
    validatePatientStringGetProperty('labelName', '{PATIENT.LABELNAME}');
});
describe('$mdObject.patient.namePrefix tests', function () {
    validatePatientStringGetProperty('namePrefix', '{PATIENT.TITLE}');
});
describe('$mdObject.patient.nameSuffix tests', function () {
    validatePatientStringGetProperty('nameSuffix', '{PATIENT.ENTITLEMENTS}');
});
describe('$mdObject.patient.sex tests', function () {
    validatePatientStringGetProperty('sex', '{PATIENT.SEX}');
});
describe('$mdObject.patient.race tests', function () {
    validatePatientStringGetProperty('race', '{PATIENT.RACE}');
});
describe('$mdObject.patient.ethnicity tests', function () {
    validatePatientStringGetProperty('ethnicity', '{PATIENT.ETHNICITY}');
});
describe('$mdObject.patient.maritalStatus tests', function () {
    validatePatientStringGetProperty('maritalStatus', '{PATIENT.MARITALSTATUS}');
});
describe('$mdObject.patient.language tests', function () {
    validatePatientStringGetProperty('language', '{PATIENT.PREFLANG}');
});
describe('$mdObject.patient.email tests', function () {
    validatePatientStringGetProperty('email', '{PATIENT.EMAIL}');
});
describe('$mdObject.patient.contactBy tests', function () {
    validatePatientStringGetProperty('contactBy', '{PATIENT.CONTACTBY}');
});
describe('$mdObject.patient.employmentStatus tests', function () {
    validatePatientStringGetProperty('employmentStatus', '{PATIENT.EMPLSTATUS}');
});
describe('$mdObject.patient.clinicStatus tests', function () {
    validatePatientStringGetProperty('clinicStatus', '{PATIENT.PSTATUS}');
});
describe('$mdObject.patient.phone tests', function () {
    // Create Mock object for MEL
    var mock = setupSimpleMelMock();
    var elementHome = eval('$mdObject.patient.phone.home');
    it('home assigned', function () { return expect(elementHome).toEqual('{PATIENT.ALTPHONE}'); });
    var elementBusiness = eval('$mdObject.patient.phone.business');
    it('business assigned', function () { return expect(elementBusiness).toEqual('{PATIENT.WORKPHONE}'); });
    var elementMobile = eval('$mdObject.patient.phone.mobile');
    it('mobile assigned', function () { return expect(elementMobile).toEqual('{PATIENT.CELLPHONE}'); });
    var elementPhone = $mdObject.patient.phone;
    it('Phone home assigned', function () { return expect(elementPhone.home).toEqual('{PATIENT.ALTPHONE}'); });
    eval('$mdObject.patient.phone.home');
    eval('$mdObject.patient.phone.business');
    eval('$mdObject.patient.phone.mobile');
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.ALTPHONE}')); }, typemoq.Times.exactly(1));
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.WORKPHONE}')); }, typemoq.Times.exactly(1));
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.CELLPHONE}')); }, typemoq.Times.exactly(1));
});
describe('$mdObject.patient.address tests', function () {
    // Create Mock object for MEL
    var mock = setupSimpleMelMock();
    var elementAddress1 = eval('$mdObject.patient.address.address1');
    it('Address1 assigned', function () { return expect(elementAddress1).toEqual('{PATIENT.ADDRESS1}'); });
    var elementAddress2 = eval('$mdObject.patient.address.address2');
    it('Address2 assigned', function () { return expect(elementAddress2).toEqual('{PATIENT.ADDRESS2}'); });
    var elementCity = eval('$mdObject.patient.address.city');
    it('City assigned', function () { return expect(elementCity).toEqual('{PATIENT.CITY}'); });
    var elementState = eval('$mdObject.patient.address.state');
    it('State assigned', function () { return expect(elementState).toEqual('{PATIENT.STATE}'); });
    var elementPostCode = eval('$mdObject.patient.address.postCode');
    it('postCode assigned', function () { return expect(elementPostCode).toEqual('{PATIENT.ZIP}'); });
    var elementcountry = eval('$mdObject.patient.address.country');
    it('country assigned', function () { return expect(elementcountry).toEqual('{PATIENT.COUNTRY}'); });
    elementAddress1 = eval('$mdObject.patient.address.address1');
    it('second call to Address1 assigned', function () { return expect(elementAddress1).toEqual('{PATIENT.ADDRESS1}'); });
    elementAddress2 = eval('$mdObject.patient.address.address2');
    it('second call to Address2 assigned', function () { return expect(elementAddress2).toEqual('{PATIENT.ADDRESS2}'); });
    elementCity = eval('$mdObject.patient.address.city');
    it('second call to City assigned', function () { return expect(elementCity).toEqual('{PATIENT.CITY}'); });
    elementState = eval('$mdObject.patient.address.state');
    it('second call to State assigned', function () { return expect(elementState).toEqual('{PATIENT.STATE}'); });
    elementPostCode = eval('$mdObject.patient.address.postCode');
    it('second call to postCode assigned', function () { return expect(elementPostCode).toEqual('{PATIENT.ZIP}'); });
    elementcountry = eval('$mdObject.patient.address.country');
    it('second call to country assigned', function () { return expect(elementcountry).toEqual('{PATIENT.COUNTRY}'); });
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.ADDRESS1}')); }, typemoq.Times.exactly(1));
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.ADDRESS2}')); }, typemoq.Times.exactly(1));
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.CITY}')); }, typemoq.Times.exactly(1));
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.STATE}')); }, typemoq.Times.exactly(1));
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.ZIP}')); }, typemoq.Times.exactly(1));
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue('{PATIENT.COUNTRY}')); }, typemoq.Times.exactly(1));
});
function validatePatientStringGetProperty(propertyName, data) {
    // Create Mock object for MEL
    var mock = setupSimpleMelMock();
    var elementFirstInstance = eval('$mdObject.patient.' + propertyName);
    it(propertyName + ' assigned', function () { return expect(elementFirstInstance).toEqual(data); });
    var elementSecondInstance = eval('$mdObject.patient.' + propertyName);
    it('second call to ' + propertyName, function () { return expect(elementSecondInstance).toEqual(data); });
    mock.verify(function (x) { return x.melFunc(typemoq.It.isValue(data)); }, typemoq.Times.exactly(1));
}
function createMelMock() {
    // Create Mock object for MEL
    var mock = typemoq.Mock.ofInstance(new $mdObject.Mel());
    // Assign mock to the Object MEL
    $mdObject.Mel.mel = mock.object;
    return mock;
}
function setupSimpleMelMock() {
    var mock = createMelMock();
    // Setub Mel call to return the same value as it pass in
    mock.setup(function (x) { return x.melFunc(typemoq.It.isAnyString()); }).returns(function (data) { return data; }).verifiable();
    return mock;
}
describe('$mdObject.Immunization tests', function () {
    var mock = createMelMock();
    var source = "1731392339121890^1731392339122220^Hepatitis B^Engerix-B Injection Suspension 10 MCG/0.5ML^Engerix-B Injection Suspension^1^Y^Parent Refusal^NotHistorical^historicalSource^V01^66290^^17100010201827^^58160085901^08^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^U1234^12/31/2015^2/2/2012^hwinston^9/2/2009 6:18 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392396121900^1731392396121900^Hepatitis B^Engerix-B Injection Suspension 10 MCG/0.5ML^Engerix-B Injection Suspension 10 MCG/0.5ML^2^Y^^N^^V01^66290^^17100010201827^^58160085901^08^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^U1234^12/31/2015^2/2/2012^hwinston^10/1/2009 6:19 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392437121910^1731392437121910^Hepatitis B^Engerix-B Injection Suspension 10 MCG/0.5ML^Engerix-B Injection Suspension 10 MCG/0.5ML^3^Y^^N^^V01^66290^^17100010201827^^58160085901^08^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^U1234^12/31/2015^2/2/2012^hwinston^3/4/2010 6:20 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392590121920^1731392590121920^DTaP^Infanrix Intramuscular Suspension 25-58-10^Infanrix Intramuscular Suspension 25-58-10^1^Y^^N^^V01^48223^^18990003201840^^58160081051^20^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^Z4321^12/31/2015^5/17/2007^hwinston^11/3/2009 6:23 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392628121930^1731392628121930^DTaP^Infanrix Intramuscular Suspension 25-58-10^Infanrix Intramuscular Suspension 25-58-10^2^Y^^N^^V01^48223^^18990003201840^^58160081051^20^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^Z4321^12/31/2015^5/17/2007^hwinston^1/4/2010 6:23 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392666121940^1731392666121940^DTaP^Infanrix Intramuscular Suspension 25-58-10^Infanrix Intramuscular Suspension 25-58-10^3^Y^^N^^V01^48223^^18990003201840^^58160081051^20^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^Z4321^12/31/2015^5/17/2007^hwinston^3/4/2010 6:24 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392701121950^1731392701121950^Polio^Ipol Injection Injectable^Ipol Injection Injectable^1^Y^^N^^V01^164891^^17100050002250^^54569481200^10^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^54321^12/31/2014^11/8/2011^hwinston^11/3/2009 6:24 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392735121960^1731392735121960^Polio^Ipol Injection Injectable^Ipol Injection Injectable^2^Y^^N^^V01^164891^^17100050002250^^54569481200^10^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^54321^12/31/2014^11/8/2011^hwinston^1/4/2010 6:25 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392761121970^1731392761121970^Polio^Ipol Injection Injectable^Ipol Injection Injectable^3^Y^^N^^V01^164891^^17100050002250^^54569481200^10^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^54321^12/31/2014^11/8/2011^hwinston^3/4/2010 6:25 AM^D^^^^^^Y^hwinston^11/12/2014 6:26 AM^^^^|1731392853122650^1731392853122650^Hepatitis A^Havrix Intramuscular Suspension 720 EL U/0.5ML^Havrix Intramuscular Suspension 720 EL U/0.5ML^1^Y^^N^^V01^98952^^17100008001830^^58160082501^83^0.5^mL^IM^C28161^Left Arm^LA^GlaxoSmithKline^SKB^321^9/30/2014^10/25/2011^hwinston^9/14/2010 6:27 AM^D^^^^^^Y^hwinston^11/12/2014 6:29 AM^^^^|1731392884122660^1731392884122660^MMR^M-M-R II Subcutaneous Injectable^M-M-R II Subcutaneous Injectable^1^Y^^N^^V01^12564^^17109903102200^^54569158800^03^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^8765^12/31/2015^4/20/2012^hwinston^9/14/2010 6:27 AM^D^^^^^^Y^hwinston^11/12/2014 6:29 AM^^^^|1731392926122670^1731392926122670^Varicella (Chicken Pox)^Varivax Subcutaneous Injectable 1350 PFU/0.5ML^Varivax Subcutaneous Injectable 1350 PFU/0.5ML^1^Y^^N^^V01^39625^^17100087102210^^54569405500^21^0.5^mL^IM^C28161^Left Arm^LA^Other manufacturer^OTH^6543^12/31/2015^3/13/2008^hwinston^9/14/2010 6:28 AM^D^^^^^^Y^hwinston^11/12/2014 6:29 AM^^^^";
    // Setub Mel call to return the same value as it pass in
    mock.setup(function (x) { return x.melFunc(typemoq.It.isAnyString()); }).returns(function (data) { return _this.source; }).verifiable();
    var im = new $mdObject.Immunization(source);
    it('immunizationId assigned', function () { return expect(im.immunizationId).toEqual('1731392339121890'); });
    it('immunizationGroupId assigned', function () { return expect(im.immunizationGroupId).toEqual('1731392339122220'); });
    it('vaccineGroupName assigned', function () { return expect(im.vaccineGroupName).toEqual('Hepatitis B'); });
    it('vaccineName assigned', function () { return expect(im.vaccineName).toEqual('Engerix-B Injection Suspension 10 MCG/0.5ML'); });
    it('medicalDisplayName assigned', function () { return expect(im.medicalDisplayName).toEqual('Engerix-B Injection Suspension'); });
    it('series assigned', function () { return expect(im.series).toEqual('1'); });
    it('wasGiven assigned', function () { return expect(im.wasGiven).toEqual('Y'); });
    it('reasonNotGiven assigned', function () { return expect(im.reasonNotGiven).toEqual('Parent Refusal'); });
    it('historical', function () { return expect(im.historical).toEqual('NotHistorical'); });
    it('historicalSource', function () { return expect(im.historicalSource).toEqual('historicalSource'); });
    it('vfcElegibility', function () { return expect(im.vfcElegibility).toEqual('V01'); });
});
