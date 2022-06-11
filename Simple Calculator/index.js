var inputLabel = document.getElementById('inputLabel');

function pushButton(object) {

    var pushed = object.innerHTML;

    if (pushed == '=') {

        inputLabel.innerHTML = eval(inputLabel.innerHTML);

    } else if (pushed == 'AC') {

        inputLabel.innerHTML = '0';

    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;

        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}