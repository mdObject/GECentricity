//

export interface IArrayAdditionalMethods<T> extends Array<T> {
    tag?: string
    toMelString?: (...data) => {}
    findByType?: (...data) => {}
}

