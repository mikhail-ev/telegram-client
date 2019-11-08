(function () {
    'use strict';

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

    console.log('bootstrap!');

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9sb2dpbi9sb2dpbi5qcyIsInNyYy9ib290c3RyYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbndpbmRvdy5NdHBBcGlNYW5hZ2VyLmludm9rZUFwaSgnaGVscC5nZXROZWFyZXN0RGMnLCB7fSwge1xuICAgIGRjSUQ6IDIsXG4gICAgY3JlYXRlTmV0d29ya2VyOiB0cnVlXG59KS50aGVuKGZ1bmN0aW9uIChuZWFyZXN0RGNSZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhuZWFyZXN0RGNSZXN1bHQpO1xuICAgIC8vIGNvbnNvbGUud2FybignMSA+Pj4+PicsIG5lYXJlc3REY1Jlc3VsdCk7XG4gICAgLy8gLy8gYXV0aC5zZW5kQ29kZVxuICAgIC8vIHdpbmRvdy5NdHBBcGlNYW5hZ2VyLmludm9rZUFwaSgnYXV0aC5zZW5kQ29kZScsIHtcbiAgICAvLyAgICAgZmxhZ3M6IDAsXG4gICAgLy8gICAgIHBob25lX251bWJlcjogJzQ4NzMwODg3MjYxJyxcbiAgICAvLyAgICAgYXBpX2lkOiBDb25maWcuQXBwLmlkLFxuICAgIC8vICAgICBhcGlfaGFzaDogQ29uZmlnLkFwcC5oYXNoLFxuICAgIC8vICAgICBsYW5nX2NvZGU6IG5hdmlnYXRvci5sYW5ndWFnZSB8fCAnZW4nXG4gICAgLy8gfSwge1xuICAgIC8vICAgICBkY0lEOiBuZWFyZXN0RGNSZXN1bHQubmVhcmVzdF9kYyxcbiAgICAvLyAgICAgY3JlYXRlTmV0d29ya2VyOiB0cnVlXG4gICAgLy8gfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgLy8gICAgIGNvbnNvbGUud2FybignMiA+Pj4+PicsIHJlc3VsdCk7XG4gICAgLy8gfSlcbn0pOyIsImltcG9ydCAnLi9tb2R1bGVzL2xvZ2luL2xvZ2luJztcblxuY29uc29sZS5sb2coJ2Jvb3RzdHJhcCEnKTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUVyQixNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEVBQUU7SUFDeEQsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNYLElBQUksZUFBZSxFQUFFLElBQUk7SUFDekIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsZUFBZSxFQUFFO0lBQ25DLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsQ0FBQyxDQUFDOztPQUFDLEhDbkJILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDOzs7OyJ9
