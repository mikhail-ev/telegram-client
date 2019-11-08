var _logTimer = (new Date()).getTime()
function dT () {
    return '[' + (((new Date()).getTime() - _logTimer) / 1000).toFixed(3) + ']'
}

function tsNow (seconds) {
    var t = +new Date() + (window.tsOffset || 0)
    return seconds ? Math.floor(t / 1000) : t
}