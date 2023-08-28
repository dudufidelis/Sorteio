const balloons = document.querySelectorAll('.balloon');

const item = "desorante"

balloons.forEach((balloon) => {
    balloon.addEventListener('click', (event) => {
        balloon.classList.add('none');
        appearReward()    
    });
});

function appearReward() {
    const rewards = document.querySelectorAll('.reward');
    
    rewards.forEach((reward) => {
        reward.innerHTML = item; 
    });
}




