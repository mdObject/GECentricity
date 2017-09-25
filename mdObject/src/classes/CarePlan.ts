//
import { EmrMel } from './classes';

export class CarePlan {

    private data = this._value == null ? [] : this._value.split('^');
    private isNew = this._value == null ? true : false;

    carePlanId: string = (this.data.length >= 1) ? this.data[0] : '';
    goal: string = (this.data.length >= 2) ? this.data[1] : '';
    snomedCTCode: string = (this.data.length >= 3) ? this.data[2] : '';
    target: string = (this.data.length >= 4) ? this.data[3] : '';
    instructions: string = (this.data.length >= 5) ? this.data[4] : '';
    goalSetDate: string = (this.data.length >= 6) ? this.data[5] : '';
    goalMetDate: string = (this.data.length >= 7) ? this.data[6] : '';
    recordCreatedDateTime: string = (this.data.length >= 8) ? this.data[7] : '';
    sign: string = (this.data.length >= 9) ? this.data[8] : '';
    signedBy: string = (this.data.length >= 10) ? this.data[9] : '';
    signedDate: string = (this.data.length >= 11) ? this.data[10] : '';
    recordChangedDateTime: string = (this.data.length >= 12) ? this.data[11] : '';
    recordChangedBy: string = (this.data.length >= 13) ? this.data[12] : '';
    patientConditionDescription: string = (this.data.length >= 14) ? this.data[13] : '';
    patientConditionCode: string = (this.data.length >= 15) ? this.data[14] : '';

    constructor(
        public _value: string,
        public _mel: EmrMel
    ) { }

    save = (): void => {
        if (this.isNew) {
            let isError = this.validateAdd(); //TODO ADD VALIDATION
            let response;
            if (isError === '') {
                response = this._mel.melFunc('{MEL_ADD_CARE_PLAN(' + this.toStringAdd() + ')}');
                if (response < 0) {
                    alert(this.carePlanAddError(response));
                }
            } else {
                alert(isError);
            }
        } else {
            //update ;

            //{MEL_UPDATE_CARE_PLAN("1691155657053120","Goal-Exercise to lose weight","","","" ,"","2013/08/03" ,"")}
            //err_code = Mel.eval("{MEL_UPDATE_CARE_PLAN(\"" +careplanID + "\",\"" +DB_TimeStamp + "\",\"" +goal_sel + "\",\"" +snomed_code + "\",\"" +target + "\",\"" +ins_sel + "\",\"" +sdate + "\",\"" +mdate + "\",\"" +problemID + "\")}");

        }
    };

    toMelString = (): string => {
        return this._value;
    };

    validateAdd = (): string => {
        let errorMessage: string = ' is required.';
        // check required parameters
        if (this.goal === '') {
            return 'goal' + errorMessage;
        }
        return '';
    };

    //MEL symbol for adding care this._value - format
    //MEL_ADD_CARE_PLAN (Goal, SNOMEDCTCODE, Target, Instructions, GoalSetDate, GoalMetDate, PRID ( pipe separated Problem IDs selected from patient’s active problems) 
    toStringAdd = (): string => {
        return '\"' + this.goal + '\",\"' +
            this.snomedCTCode + '\",\"' +
            this.target + '\",\"' +
            this.instructions + '\",\"' +
            this.goalSetDate + '\",\"' +
            this.goalMetDate + '\",\"' +
            this.patientConditionCode + '\"';
    };

    carePlanAddError = (code: string): string => {
        let response: string = '';
        switch (code) {
            case "-1":
                response = "Error Code -1: Description or blank is too long.";
                break;
            case "-2":
                response = "Error Code -2: Code is too long.";
                break;
            case "-3":
                response = "Error Code -3: Target is too long.";
                break;
            case "-4":
                response = "Error Code -4: Instruction is too long.";
                break;
            case "-5":
                response = "Error Code -5: goalSetDate is invalid.";
                break;
            case "-6":
                response = "Error Code -6: goalMetDate is invalid or less than goalSetDate.";
                break;
            case "-7":
                response = "Error Code -7: Invalid patientConditionCode. Use $mdObject.patient.problems[index].problemId";
                break;
            case "-8":
                response = "Error Code -8: Cannot add Care Plan for some other reason.";
                break;
            case "-21":
                response = "Error Code -21: Service layer error.";
                break;
            default:
        }
        return response;
    };

}