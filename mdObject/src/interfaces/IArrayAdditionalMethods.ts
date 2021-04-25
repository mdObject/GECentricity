export interface IArrayAdditionalMethods<T> extends Array<T> {
    tag?: string
    toMelString?: (...data) => {} //this method is not working currectly in allergies
    findByType?: (...data) => {}
}