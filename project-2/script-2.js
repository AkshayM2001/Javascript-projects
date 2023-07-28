const main = document.querySelector('main');

main.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height'));
    const weight = parseInt(document.querySelector('#weight'));
    const result = document.querySelector('#reshow');

    if (height < 0 || isNaN(height) || height === '') {
        result.innerHTML = `Please enter valid Height ${height}`;
    }
    else if (weight < 0 || isNaN(weight) || weight === '') {
        result.innerHTML = `Please enter valid weight ${weight}`;
    }
    else {
        const bmi = (weight / (height*height) / 10000).toFixed(2);

        // to show result

        result.innerHTML = `<span>${bmi}</span>`;
    }
});