const url = window.location?.search.split("=");
const currentId = url[1];
const path = `./${currentId}/index.js`;

function elementExists(id) {
    return document.getElementById(id) !== null;
}

function removeElementById(id) {
    let element = document.getElementById(id);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

if (currentId) {
    const scriptId = "currentScript";
    if (elementExists(scriptId)) {
        // remove
        removeElementById(scriptId);
    }

    // create script tag
    let script = document.createElement("script");
    script.src = path;
    script.id = scriptId;
    document.body.appendChild(script);

}
