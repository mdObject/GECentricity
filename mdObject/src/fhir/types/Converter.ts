import { dateTime } from "./dateTime";

export class Converter {

    static dateTimeToDate(source: dateTime): Date {
        return new Date(source);
    }
}