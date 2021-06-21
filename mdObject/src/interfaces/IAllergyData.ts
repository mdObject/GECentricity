export interface IAllergyData {
    name: string
    onSetDate: Date | undefined
    criticalIndicator: string
    classification: string
    description: string
    gpiCode: string
    severity: string
    stopDate: Date | undefined
    allergyId: string
    reactionCode: number
}