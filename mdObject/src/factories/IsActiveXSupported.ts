export function IsActiveXSupported(_window: any): boolean {
    let result: boolean = 'ActiveXObject' in _window;

    // Verify ActiveX support in this browser
    if (!result) {
        console.log("Your browser does not support ActiveX objects");
    }
    return result;
}