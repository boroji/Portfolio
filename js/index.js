
var animation = anime({
    targets: '.line-drawing',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 10 },
    direction: 'alternate',
    loop: true,
    autoplay: false
});

document.querySelector('.play').onclick = animation.play;
document.querySelector('.pause').onclick = animation.pause;
document.querySelector('.restart').onclick = animation.restart;

animation.play();
animation.pause();
animation.restart();
