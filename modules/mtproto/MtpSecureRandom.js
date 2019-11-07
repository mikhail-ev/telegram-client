window.MtpSecureRandom = (function () {
    document.addEventListener('click', function () {
        rng_seed_time();
    });
    document.addEventListener('keydown', function () {
        rng_seed_time();
    });
    return new SecureRandom();
}());