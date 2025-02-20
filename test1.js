const scriptURL = new URL(document.currentScript.src);
const scriptDir = scriptURL.origin + scriptURL.pathname.substring(0, scriptURL.pathname.lastIndexOf("/"));
console.log(scriptDir);
