function attachGradientEvents() {
    let gradientEvents = document.getElementById('gradient');
    let result = document.getElementById('result');


    gradientEvents.addEventListener('mousemove', function (event) {
        let position = event.offsetX;
        let gradientWidth = event.target.clientWidth;
        result.textContent = `${Math.trunc(position / gradientWidth * 100)}%`;
    });
    console.log(gradientEvents);
}