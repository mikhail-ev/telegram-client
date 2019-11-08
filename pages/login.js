window.TlLoginPage = (function () {
    var appContainerElem = document.querySelectorAll('#appRootContainer')[0];

    function mount() {
        var hash = window.location.hash;
        var pureHash = hash.split('?')[0];
        appContainerElem.innerHTML = '';
        appContainerElem.innerHTML = document.querySelectorAll(TLRoutingList[pureHash.slice(1, pureHash.length)].templateSelector)[0].innerHTML;
    }

    mount();

    return {
        mount: mount
    }
}());
