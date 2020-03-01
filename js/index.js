var seekProgressEl = document.querySelector('.progress');

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
animation.seek(timeStamp);
