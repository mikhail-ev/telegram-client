export function phoneToString(country, phone) {
    var prefix = '+' + country;
    var phoneString = phone.toString();
    var excess = phoneString.length % 2;
    var excessPart = phoneString.slice(0, excess);
    var remainingPart = phoneString.slice(excess);
    var pairsCount = remainingPart.length / 2;
    var pairs = [];
    for (var i = 0; i < pairsCount; ++i) {
        pairs.push(remainingPart.slice(i * 2, (i + 1) * 2));
    }
    if (excessPart.length) {
        return [prefix, excessPart].concat(pairs).join(' ');
    }
    return [prefix].concat(pairs).join(' ');
}