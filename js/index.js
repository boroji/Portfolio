/* var seekProgressEl = document.querySelector('.progress');

var animation = anime({
    targets: '.line-drawing',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 10 },
    direction: 'alternate',
    loop: true,
    autoplay: true
});

document.querySelector('.play').onclick = animation.play;
document.querySelector('.pause').onclick = animation.pause;
document.querySelector('.restart').onclick = animation.restart;

seekProgressEl.oninput = function () {
    animation.seek(animation.duration * (seekProgressEl.value / 100));
};

animation.play();
animation.pause();
animation.restart();
animation.seek(timeStamp); */

var controlsProgressEl = document.querySelector('.progress');

var seekProgressEl = document.querySelector('.progress');

var tl = anime.timeline({
        easing: 'easeInOutSine',
        duration: 1500,
        direction: 'alternate',
        delay: function (el, i, l) {
            return i * 1;
        },
        loop: true,
        autoplay: true
});

tl
.add({
    targets: '.line-drawing',
    strokeDashoffset: [anime.setDashoffset, 0],
})
.add({
    targets: '.shape',
    scale: [0, 1],
}, '-=100');

document.querySelector('.play').onclick = tl.play;
document.querySelector('.pause').onclick = tl.pause;
document.querySelector('.restart').onclick = tl.restart;

controlsProgressEl.addEventListener('input', function () {
    tl.seek(tl.duration * (controlsProgressEl.value / 100));
});

timeline.play();
timeline.pause();
timeline.restart();
timeline.seek(timeStamp);