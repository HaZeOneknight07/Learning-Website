// Delay the hiding of preloader and showing login content after 5 seconds
setTimeout(function () {
    document.querySelector('.preloader').classList.add('hide');
    document.getElementById('main-content').classList.remove('hide');
}, 5000);