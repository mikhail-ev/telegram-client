window.$timeout = (function () {
    function $timeout(fn, delay, invoke, args) {
        var timeoutId = null;
        var promise = new Promise(function (resolve) {
            timeoutId = setTimeout(function () {
                resolve(fn.apply(null, args));
            }, delay);
        });
        promise.id = timeoutId;
        return promise;
    }

    $timeout.cancel = function (promise) {
        clearTimeout(promise.id);
    };

    return $timeout;
}());