export class System {
    static isSimulator: boolean;

    static toDate = (value: string): Date => {
        return new Date(parseInt(value.substr(6)));
    }
}