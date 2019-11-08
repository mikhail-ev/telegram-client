window.Storage = (function () {
    function set() {
        var args = [].slice.call(arguments);
        return new Promise(function (resolve) {
            args.forEach(function (object) {
                for (var prop in object) {
                    if (object.hasOwnProperty(prop)) {
                        localStorage.setItem(prop, object[prop]);
                    }
                }
            });
            resolve();
        });
    }

    function get() {
        var args = [].slice.call(arguments);
        return new Promise(function (resolve) {
            var result = [];
            args.forEach(function (key) {
                result.push(localStorage.getItem(key));
            });
            resolve(result);
        });
    }

    function remove() {
        var args = [].slice.call(arguments);
        return new Promise(function (resolve) {
            args.forEach(function (key) {
                localStorage.removeItem(key);
            });
            resolve();
        });
    }

    function clear() {
        return new Promise(function (resolve) {
            localStorage.clear();
            resolve();
        });
    }

    return {
        set: set,
        get: get,
        remove: remove,
        clear: clear
    }
}());