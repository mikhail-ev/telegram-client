window.MtpTimeManager = (function () {
    var Storage = window.Storage;
    var lastMessageID = [0, 0]
    var timeOffset = 0

    // var to = localStorage.getItem('server_time_offset');
    var to = Storage.getSync('server_time_offset');
    if (to) {
        timeOffset = +to;
    }

    function generateMessageID() {
        var timeTicks = tsNow(),
            timeSec = Math.floor(timeTicks / 1000) + timeOffset,
            timeMSec = timeTicks % 1000,
            random = nextRandomInt(0xFFFF)

        var messageID = [timeSec, (timeMSec << 21) | (random << 3) | 4]
        if (lastMessageID[0] > messageID[0] ||
            lastMessageID[0] == messageID[0] && lastMessageID[1] >= messageID[1]) {
            messageID = [lastMessageID[0], lastMessageID[1] + 4]
        }

        lastMessageID = messageID;

        // console.log('generated msg id', messageID, timeOffset)

        return longFromInts(messageID[0], messageID[1])
    }

    function applyServerTime(serverTime, localTime) {
        var newTimeOffset = serverTime - Math.floor((localTime || tsNow()) / 1000)
        var changed = Math.abs(timeOffset - newTimeOffset) > 10;
        Storage.set({ server_time_offset: newTimeOffset });

        lastMessageID = [0, 0];
        timeOffset = newTimeOffset;

        return changed
    }

    return {
        generateID: generateMessageID,
        applyServerTime: applyServerTime
    }
}());