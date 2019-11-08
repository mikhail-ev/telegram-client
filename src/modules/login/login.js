localStorage.clear();

window.MtpApiManager.invokeApi('help.getNearestDc', {}, {
    dcID: 2,
    createNetworker: true
}).then(function (nearestDcResult) {
    console.log(nearestDcResult);
    // console.warn('1 >>>>>', nearestDcResult);
    // // auth.sendCode
    // window.MtpApiManager.invokeApi('auth.sendCode', {
    //     flags: 0,
    //     phone_number: '48730887261',
    //     api_id: Config.App.id,
    //     api_hash: Config.App.hash,
    //     lang_code: navigator.language || 'en'
    // }, {
    //     dcID: nearestDcResult.nearest_dc,
    //     createNetworker: true
    // }).then(function (result) {
    //     console.warn('2 >>>>>', result);
    // })
});