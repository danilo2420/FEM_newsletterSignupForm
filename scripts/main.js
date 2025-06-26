console.log('hello');

/* Variables */
const form1 = document.getElementById('form1');
console.log(form1);

/* Functions */
function main() {
    configure_form1();
}

function configure_form1() {
    function handle_submit(e) {
        console.log('hello');
        e.preventDefault();
    }
    form1.addEventListener('submit', handle_submit);
}


main();