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
            resolve(getSync.apply(null, args));
        });
    }

    function getSync() {
        var args = [].slice.call(arguments);
        if (args.length === 1) {
            if (Array.isArray(args[0])) {
                args = args[0];
            } else {
                return localStorage.getItem(args[0]);
            }
        }
        var result = [];
        args.forEach(function (key) {
            result.push(localStorage.getItem(key));
        });
        return result;
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
        getSync: getSync,
        remove: remove,
        clear: clear
    }
}());