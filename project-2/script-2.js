var main = document.querySelector('#main');


main.addEventListener('submit', function (e) {
    e.preventDefault();

    var height = parseInt(document.querySelector('#height1').ariaValueText);
    var weight = parseInt(document.querySelector('#weight2').ariaValueText);
    var result = document.querySelector('#reshow');
    

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid Height ${height}`;
        console.log("bad");
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid Weight ${weight}`;
        console.log("bad2");
    } else {
        const bmi = (weight / ((height*height) / 10000).toFixed(2));
        console.log("bad3")

        // to show result

        result.innerHTML = `<span>${bmi}</span>`;
        console.log("bad4")
    }
});