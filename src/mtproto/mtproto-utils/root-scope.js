window.$rootScope = (function () {
    return {
        $on: function () {
            console.warn('$rootScope.$on was invoked')
        },
        $watch: function () {
            console.warn('$rootScope.$watch was invoked')
        }
    }
})();
