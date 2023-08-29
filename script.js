let items = [
    "Bombom", "Io-Io", "Relogio", "Garrafa", "Jogo de Panela",
    "Perfume", "Pulseira", "Chaveiro"
];

const balloons = document.querySelectorAll('.balloon');

balloons.forEach((balloon) => {
    balloon.addEventListener('click', (event) => {
        balloon.classList.add('none');
        appearReward(balloon);
    });
});

function appearReward(balloon) {
    const reward = balloon.nextElementSibling;
    const item = Math.floor(Math.random() * items.length);
    reward.innerHTML = items[item];
}
