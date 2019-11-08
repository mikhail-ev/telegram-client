window.TLRouter = (function () {
    var appContainerElem = document.querySelectorAll('#appRootContainer')[0];

    function handleHashChange() {
        var hash = window.location.hash;
        var pureHash = hash.split('?')[0];

        if (hash) {
            loadScript(TLRoutingList[pureHash.slice(1, pureHash.length)].scriptUrl, function () {
                console.log('script loaded');
            });
        }
    }

    function loadScript(url, callback) {

        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {  //IE
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("body")[0].appendChild(script);
    }

    return {
        init: function () {
            window.addEventListener('hashchange', function () {
                console.log('[JS_EVENT:: hashchange] Hash was changed.');
                handleHashChange();
            });

            window.addEventListener('DOMContentLoaded', function (ev) {
                console.log('[JS_EVENT:: DOMContentLoaded] Content was loaded.');
                handleHashChange();
            });
        }
    }
}());





