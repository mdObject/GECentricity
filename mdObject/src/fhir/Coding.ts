export class Coding {
    // from Element: extension
    system: string; //"<uri>", // Identity of the terminology system
    version?: string; // Version of the system - if relevant
    code: string; // Symbol in syntax defined by the system
    display: string; // Representation defined by the system
    userSelected?: boolean; // If this coding was chosen directly by the user
}