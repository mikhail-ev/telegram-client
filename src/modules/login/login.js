// localStorage.clear();
//
// window.MtpApiManager.invokeApi('help.getNearestDc', {}, {
//     dcID: 2,
//     createNetworker: true
// }).then(function (nearestDcResult) {
//     console.log(nearestDcResult);
//     // console.warn('1 >>>>>', nearestDcResult);
//     // // auth.sendCode
//     // window.MtpApiManager.invokeApi('auth.sendCode', {
//     //     flags: 0,
//     //     phone_number: '48730887261',
//     //     api_id: Config.App.id,
//     //     api_hash: Config.App.hash,
//     //     lang_code: navigator.language || 'en'
//     // }, {
//     //     dcID: nearestDcResult.nearest_dc,
//     //     createNetworker: true
//     // }).then(function (result) {
//     //     console.warn('2 >>>>>', result);
//     // })
// });
window.TlLoginPage = (function () {
    var appContainerElem = document.querySelectorAll('#appRootContainer')[0];

    function mount() {
        var hash = window.location.hash;
        var pureHash = hash.split('?')[0];
        appContainerElem.innerHTML = '';
        appContainerElem.innerHTML = document.querySelectorAll(window.TLRoutingList[pureHash.slice(1, pureHash.length)].templateSelector)[0].innerHTML;
    }

    return {
        mount: mount
    }
}());
