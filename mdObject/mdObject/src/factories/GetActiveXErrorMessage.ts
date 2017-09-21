//

export function GetActiveXErrorMessage(objectName: string, e: { Message: string }) {
    let result = "Unable to load ActiveX interface " + objectName;
    result += ((e !== undefined && e.hasOwnProperty("Message")) ? ".\nError message: " + e.Message : "");
    return result;
}