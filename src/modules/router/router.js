import { routing } from './routing';

var rootId = 'root';

var loadedFiles = {};
var activeModule = null;

function handleHashChange() {
    var hash = window.location.hash;
    var route;

    if (hash) {
        var pureHash = hash.split('?')[0];
        var routeName = pureHash.slice(1, pureHash.length);
        route = routing[routeName];
    } else {
        route = routing['*'];
    }

    loadScript('./' + route.file, () => {
        if (activeModule) {
            activeModule.unmount();
        }
        activeModule = window[route.name];
        activeModule.mount(rootId);
    });
}

function loadScript(url, callback) {
    if (loadedFiles[url]) {
        return callback();
    }

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                return onLoad();
            }
        };
    } else {  //Others
        script.onload = function () {
            return onLoad();
        };
    }

    function onLoad() {
        loadedFiles[url] = true;
        return callback();
    }

    script.src = url;
    document.getElementsByTagName("body")[0].appendChild(script);
}

function init() {
    window.addEventListener('hashchange', function () {
        console.log('[JS_EVENT:: hashchange] Hash was changed.');
        handleHashChange();
    });

    window.addEventListener('DOMContentLoaded', function (ev) {
        console.log('[JS_EVENT:: DOMContentLoaded] Content was loaded.');
        handleHashChange();
    });
}

export { init };





