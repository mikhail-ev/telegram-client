(function () {
    window.TLRoutingList = {
        login: {
            templateSelector: '#loginPage',
            scriptUrl: './modules/login/login.js',
            scriptField: 'TlLoginPage'
        }
    };

    window.TLRouter = (function () {
        var appContainerElem = document.querySelectorAll('#appRootContainer')[0];

        function handleHashChange() {
            var hash = window.location.hash;
            var pureHash = hash.split('?')[0];
            debugger;
            if (hash) {
                var pageSettings = TLRoutingList[pureHash.slice(1, pureHash.length)];
                window[pageSettings.scriptField].mount();
                // loadScript(TLRoutingList[pureHash.slice(1, pureHash.length)].scriptUrl, function () {
                //     console.log('script loaded');
                // });
            }
        }

        return {
            init: function () {
                window.addEventListener('hashchange', function () {
                    console.log('[JS_EVENT:: hashchange] Hash was changed.');
                    handleHashChange();
                });

                window.addEventListener('DOMContentLoaded', function (ev) {
                    console.log('[JS_EVENT:: DOMContentLoaded] Content was loaded.');
                    handleHashChange();
                });
            }
        }
    }());

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

    TLRouter.init();

    console.log('bootstrap!');

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9yb3V0ZXIvYXBwLnJvdXRpbmcuanMiLCJzcmMvbW9kdWxlcy9yb3V0ZXIvcm91dGVyLmpzIiwic3JjL21vZHVsZXMvbG9naW4vbG9naW4uanMiLCJzcmMvYm9vdHN0cmFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5UTFJvdXRpbmdMaXN0ID0ge1xuICAgIGxvZ2luOiB7XG4gICAgICAgIHRlbXBsYXRlU2VsZWN0b3I6ICcjbG9naW5QYWdlJyxcbiAgICAgICAgc2NyaXB0VXJsOiAnLi9tb2R1bGVzL2xvZ2luL2xvZ2luLmpzJyxcbiAgICAgICAgc2NyaXB0RmllbGQ6ICdUbExvZ2luUGFnZSdcbiAgICB9XG59O1xuIiwid2luZG93LlRMUm91dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXBwQ29udGFpbmVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhcHBSb290Q29udGFpbmVyJylbMF07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICB2YXIgcHVyZUhhc2ggPSBoYXNoLnNwbGl0KCc/JylbMF07XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgdmFyIHBhZ2VTZXR0aW5ncyA9IFRMUm91dGluZ0xpc3RbcHVyZUhhc2guc2xpY2UoMSwgcHVyZUhhc2gubGVuZ3RoKV07XG4gICAgICAgICAgICB3aW5kb3dbcGFnZVNldHRpbmdzLnNjcmlwdEZpZWxkXS5tb3VudCgpO1xuICAgICAgICAgICAgLy8gbG9hZFNjcmlwdChUTFJvdXRpbmdMaXN0W3B1cmVIYXNoLnNsaWNlKDEsIHB1cmVIYXNoLmxlbmd0aCldLnNjcmlwdFVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdzY3JpcHQgbG9hZGVkJyk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRTY3JpcHQodXJsLCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG5cbiAgICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlKSB7ICAvL0lFXG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHsgIC8vT3RoZXJzXG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tKU19FVkVOVDo6IGhhc2hjaGFuZ2VdIEhhc2ggd2FzIGNoYW5nZWQuJyk7XG4gICAgICAgICAgICAgICAgaGFuZGxlSGFzaENoYW5nZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tKU19FVkVOVDo6IERPTUNvbnRlbnRMb2FkZWRdIENvbnRlbnQgd2FzIGxvYWRlZC4nKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVIYXNoQ2hhbmdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG5cblxuXG5cblxuIiwiLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4vL1xuLy8gd2luZG93Lk10cEFwaU1hbmFnZXIuaW52b2tlQXBpKCdoZWxwLmdldE5lYXJlc3REYycsIHt9LCB7XG4vLyAgICAgZGNJRDogMixcbi8vICAgICBjcmVhdGVOZXR3b3JrZXI6IHRydWVcbi8vIH0pLnRoZW4oZnVuY3Rpb24gKG5lYXJlc3REY1Jlc3VsdCkge1xuLy8gICAgIGNvbnNvbGUubG9nKG5lYXJlc3REY1Jlc3VsdCk7XG4vLyAgICAgLy8gY29uc29sZS53YXJuKCcxID4+Pj4+JywgbmVhcmVzdERjUmVzdWx0KTtcbi8vICAgICAvLyAvLyBhdXRoLnNlbmRDb2RlXG4vLyAgICAgLy8gd2luZG93Lk10cEFwaU1hbmFnZXIuaW52b2tlQXBpKCdhdXRoLnNlbmRDb2RlJywge1xuLy8gICAgIC8vICAgICBmbGFnczogMCxcbi8vICAgICAvLyAgICAgcGhvbmVfbnVtYmVyOiAnNDg3MzA4ODcyNjEnLFxuLy8gICAgIC8vICAgICBhcGlfaWQ6IENvbmZpZy5BcHAuaWQsXG4vLyAgICAgLy8gICAgIGFwaV9oYXNoOiBDb25maWcuQXBwLmhhc2gsXG4vLyAgICAgLy8gICAgIGxhbmdfY29kZTogbmF2aWdhdG9yLmxhbmd1YWdlIHx8ICdlbidcbi8vICAgICAvLyB9LCB7XG4vLyAgICAgLy8gICAgIGRjSUQ6IG5lYXJlc3REY1Jlc3VsdC5uZWFyZXN0X2RjLFxuLy8gICAgIC8vICAgICBjcmVhdGVOZXR3b3JrZXI6IHRydWVcbi8vICAgICAvLyB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbi8vICAgICAvLyAgICAgY29uc29sZS53YXJuKCcyID4+Pj4+JywgcmVzdWx0KTtcbi8vICAgICAvLyB9KVxuLy8gfSk7XG53aW5kb3cuVGxMb2dpblBhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcHBDb250YWluZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2FwcFJvb3RDb250YWluZXInKVswXTtcblxuICAgIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICB2YXIgcHVyZUhhc2ggPSBoYXNoLnNwbGl0KCc/JylbMF07XG4gICAgICAgIGFwcENvbnRhaW5lckVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGFwcENvbnRhaW5lckVsZW0uaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh3aW5kb3cuVExSb3V0aW5nTGlzdFtwdXJlSGFzaC5zbGljZSgxLCBwdXJlSGFzaC5sZW5ndGgpXS50ZW1wbGF0ZVNlbGVjdG9yKVswXS5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW91bnQ6IG1vdW50XG4gICAgfVxufSgpKTtcbiIsImltcG9ydCAnLi9tb2R1bGVzL3JvdXRlci9hcHAucm91dGluZyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCAnLi9tb2R1bGVzL2xvZ2luL2xvZ2luJztcblxuVExSb3V0ZXIuaW5pdCgpO1xuXG5jb25zb2xlLmxvZygnYm9vdHN0cmFwIScpO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxNQUFNLENBQUMs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
