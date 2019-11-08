window.$http = (function () {
    function post(url, requestData) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.onload = function () {
                resolve({ data: request.response });
            };
            request.onerror = function () {
                reject(request);
            };
            request.responseType = 'arraybuffer';
            request.send(requestData);
        });
    }

    return {
        post: post,
        defaults: { headers: { post: {}, common: {} } }
    }
})();