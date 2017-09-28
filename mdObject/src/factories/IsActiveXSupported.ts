//

export function IsActiveXSupported(_window: any) {
    let activeXsupport = 'ActiveXObject' in _window;
    
    // Verify ActiveX support in this browser
    if (!activeXsupport) {
        alert("Your browser does not support ActiveX objects");
    }
    return activeXsupport;
}