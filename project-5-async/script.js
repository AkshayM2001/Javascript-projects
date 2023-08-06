
const randomcolor = function (e) {
    const option = '0123456789ABCDEF';
    let colors = '#';

    for (i = 0; i < 6; i++) {
        colors += option[Math.floor(Math.random() * 16)];
    }
    return colors;
};
let intervalId;
const startchange = function () {
    if(!intervalId){
        intervalId = setInterval(changebgcolor, 1000);
    }
    function changebgcolor () {
        document.body.style.backgroundColor = randomcolor();
    }
};
const stopchange = function () {
    clearInterval(intervalId);
    intervalId = null;
    document.body.style.backgroundColor = `#d3d3d3`;
};


document.querySelector('#start').addEventListener('click', startchange);
document.querySelector('#stop').addEventListener('click', stopchange);
