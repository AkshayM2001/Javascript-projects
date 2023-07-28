const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
const box11 = document.querySelector('.big');

button.forEach(function(buttons){
    // buttons.addEventListener('click', function (e) {
    //     console.log(buttons)
    //     console.log(e.target)
    // if (e.target.id === 'gray') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'red') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //     body.style.backgroundColor = e.target.id;
    // }
    // });


    buttons.addEventListener('click', function (e) {
        
        if (e.target.id === 'gray') {
            box11.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            box11.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            box11.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            box11.style.backgroundColor = e.target.id;
        }
    })
});