window.$q = (function () {
    function Deferred() {
        var self = this;
        this.promise = new Promise(function (resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;
        });
    }

    return {
        defer: function () {
            return new Deferred();
        },

        reject: function (e) {
            return Promise.reject(e);
        }
    };
}());
