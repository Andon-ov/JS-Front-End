function encodeAndDecodeMessages() {
    let textAreas = document.getElementsByTagName('textarea');
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let encodeMassage = '';
        let input = textAreas[0].value;
        for (let i = 0; i < input.length; i++) {
            encodeMassage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }
        textAreas[1].value = encodeMassage
        textAreas[0].value = ''
    }

    function decode() {
        let decodeMassage = '';
        let input = textAreas[1].value;
        for (let i = 0; i < input.length; i++) {
            decodeMassage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        textAreas[1].value = decodeMassage
        // textAreas[1].value = ''
    }


}