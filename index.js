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
        removeElementById(scriptId);
    }

    // create script tag
    let script = document.createElement("script");
    script.src = path;
    script.id = scriptId;
    document.body.appendChild(script);

}

let projectTabOpen = {};
function handleDropDown(id) {
    if (projectTabOpen[id] === undefined) {
        projectTabOpen[id] = true; 
    }

    if (projectTabOpen[id]) {
       
        document.getElementById(id).style.display = "none";
        projectTabOpen[id] = false;
    } else if (projectTabOpen[id] === false) {
        document.getElementById(id).style.display = "inherit";
        projectTabOpen[id] = true;
    }
    
};
