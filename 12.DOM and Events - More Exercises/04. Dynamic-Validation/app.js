function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', textChange);


    function textChange(event) {

        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(event.target.value)) {
            console.log(event.target.value);
            event.target.classList.remove('error');
        } else {


            event.target.classList.add('error');
        }

    }

}