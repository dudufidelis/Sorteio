let items = ["premio1", "premio2", "premio3"]

const balloons = document.querySelectorAll('.balloon');
const item = Math.floor(Math.random(max, min) * items.length)

balloons.forEach((balloon) => {
    balloon.addEventListener('click', (event) => {
        balloon.classList.add('none');
        appearReward(balloon);
    });
});

function appearReward(balloon) {
    const reward = balloon.nextElementSibling;
    reward.innerHTML = items[item];
}
