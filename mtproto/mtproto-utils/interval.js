window.$interval = (function () {
    function $interval(fn, delay, invoke, args) {
        var intervalId = null;
        var promise = new Promise(function (resolve) {
            intervalId = setInterval(function () {
                resolve(fn.apply(null, args));
            }, delay);
        });
        promise.id = intervalId;
        return promise;
    }

    $interval.cancel = function (promise) {
        clearTimeout(promise.id);
    };

    return $interval;
}());