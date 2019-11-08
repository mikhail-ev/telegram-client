window.MtpApiManager.invokeApi('help.getNearestDc', {}, {dcID: 2, createNetworker: true}).then(function (nearestDcResult) {
    console.warn('>>>>>', nearestDcResult);
    // if (wasCountry == $scope.credentials.phone_country) {
    //     selectPhoneCountryByIso2(nearestDcResult.country)
    // }
    // if (nearestDcResult.nearest_dc != nearestDcResult.this_dc) {
    //     MtpApiManager.getNetworker(nearestDcResult.nearest_dc, {createNetworker: true})
    // }
})