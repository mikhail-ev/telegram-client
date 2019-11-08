window.angular = (function () {
    var MAX_SAFE_INTEGER = 9007199254740991;

    function isLength(value) {
        return typeof value === 'number' &&
            value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
    }

    function isFunction(value) {
        return typeof value === 'function';
    }

    function isArray(a) {
        return Array.isArray(a);
    }

    function isArrayLike(value) {
        return value != null && typeof value !== 'function' && isLength(value.length)
    }

    function isBlankObject(value) {
        return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value);
    }

    function forEach(obj, iterator, context) {
        var key, length;
        if (obj) {
            if (isFunction(obj)) {
                for (key in obj) {
                    if (key !== 'prototype' && key !== 'length' && key !== 'name' && obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            } else if (isArray(obj) || isArrayLike(obj)) {
                var isPrimitive = typeof obj !== 'object';
                for (key = 0, length = obj.length; key < length; key++) {
                    if (isPrimitive || key in obj) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            } else if (obj.forEach && obj.forEach !== forEach) {
                obj.forEach(iterator, context, obj);
            } else if (isBlankObject(obj)) {
                // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
                for (key in obj) {
                    iterator.call(context, obj[key], key, obj);
                }
            } else if (typeof obj.hasOwnProperty === 'function') {
                // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            } else {
                // Slow path for objects which do not have a method `hasOwnProperty`
                for (key in obj) {
                    if (Object.hasOwnProperty.call(obj, key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            }
        }
        return obj;
    }

    return {
        extend: Object.assign,
        isObject: function isObject(value) {
            // http://jsperf.com/isobject4
            return value !== null && typeof value === 'object';
        },
        forEach: forEach
    }
})();