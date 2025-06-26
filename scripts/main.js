
/* Variables */
const container1 = document.getElementById('container1');
const form1 = document.getElementById('form1');
const form1_input = document.getElementById('form1_input');
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
    console.log(value);
    if (email_regex.test(value)) {
        container1.style.display = 'none';
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

main();