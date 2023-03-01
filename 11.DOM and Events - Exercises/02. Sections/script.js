function create(words) {
    let content = document.getElementById("content");
    for (let word of words) {
        let p = document.createElement("p");
        p.textContent = word;
        p.style.display = "none";

        let div = document.createElement("div");
        div.appendChild(p);

        content.appendChild(div);
    }
    let allDiv = document.querySelectorAll("body div div");


    for (let d of allDiv){
        d.addEventListener("click", onHover)

    }

    // allDiv.forEach(d => {
    //     d.addEventListener("mouseover", onHover)
    // })


    function onHover(e) {
        let p = e.currentTarget.children[0]
        p.style.display = "block";

    }
}
