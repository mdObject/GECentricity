export function GetActiveXErrorMessage(objectName: string, e: { Message: string }) {
    let result = "Unable to load ActiveX interface " + objectName;
    result += ((e != null && e.hasOwnProperty("Message")) ? ".\nError message: " + e.Message : "");
    return result;
}