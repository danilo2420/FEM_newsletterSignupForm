
/* Variables */
const container1 = document.getElementById('container1');
const form1 = document.getElementById('form1');
const form1_input = document.getElementById('form1_input');
const btnContainer1 = document.getElementById('btnContainer1');
const errorMessage = document.getElementById('errorMessage');
const container2 = document.getElementById('container2');
const btnContainer2 = document.getElementById('btnContainer2');

const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Functions */
function main() {
    configure_form1();
    configure_button_container2();
}

function configure_form1() {
    function handle_submit(e) {
        e.preventDefault();
        validate_input();
    }
    form1.addEventListener('submit', handle_submit);
}

function validate_input() {
    const value = form1_input.value;
    if (email_regex.test(value)) {
        container1.style.display = 'none';
        form1_input.value = '';

        container2.style.display = 'flex';
    } else {
        errorMessage.style.visibility = 'visible';
        form1_input.classList.add('content__form__input--errorState');
    }
}

function configure_button_container2() {
    btnContainer2.addEventListener('click', () => {
        container1.style.display = 'flex';
        container2.style.display = 'none';
    })
}

/* HTML event functions */
function handle_oninput() {
    const value = form1_input.value;
    if (value == '') {
        btnContainer1.disabled = true;
        btnContainer1.classList.add('blueButton--disabled');
    } else {
        btnContainer1.disabled = false;
        btnContainer1.classList.remove('blueButton--disabled');

        if (email_regex.test(value)) {
            errorMessage.style.visibility = 'hidden';
            form1_input.classList.remove('content__form__input--errorState');
        }
    }
}   

main();