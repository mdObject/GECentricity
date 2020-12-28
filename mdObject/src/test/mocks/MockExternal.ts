export class MockExternal {


    constructor() { }

    get Demographics(): string { return "{}"; }

    EvaluateMel = (data: any): any => { return data; } 
    
}