//
export interface IStringInternal extends String {
    toList: (seporator?: string) => Array<string>
    startsWith: (str: string) => boolean
    endsWith: (str: string) => boolean
    tag: string
    toDate: () => Date
}
