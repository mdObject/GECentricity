//

export function IsActiveXSupported() {
    let activeXsupport = 'ActiveXObject' in window;
    
    // Verify ActiveX support in this browser
    if (!activeXsupport) {
        alert("Your browser does not support ActiveX objects");
    }
    return activeXsupport;
}