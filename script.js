const container = document.querySelector('.container');
k = 0;
while (k < 100) {
	for (let i = 1, j = 0; i <= 20; i++, j++) {
		let block = document.createElement('span');
		block.classList.add('block');
		container.appendChild(block);
		block.style.cssText = `clip-path: polygon(${j * 5}% ${k}%, ${i * 5}% ${k}%, ${i * 5}% ${k + 5}%, ${j * 5}% ${
			k + 5
		}%)`;
	}
	k += 5;
}

let block = document.querySelectorAll('.block');
let animation = anime.timeline({
	targets: block,
	easing: 'easeInOutExpo',
	loop: true,
	delay: anime.stagger(10, { start: 50 }),
});

animation
	.add({
		scale: 0,
		translateX: function () {
			return anime.random(360, 2100);
		},
		translateY: function () {
			return anime.random(360, -2100);
		},
		rotate: function () {
			return anime.random(-360, 360);
		},
		duration: function () {
			return anime.random(500, 3000);
		},
	})
	.add({
		scale: 1,
		translateX: 0,
		translateY: 0,
		rotate: 0,
		duration: function () {
			return anime.random(500, 3000);
		},
	});
