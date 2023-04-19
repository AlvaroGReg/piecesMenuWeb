Array.from(document.getElementsByClassName('texthover')).forEach(element =>{

    element.addEventListener('mouseover', (event) =>{
        makeVisible(element.id);
    })

    element.addEventListener("mouseleave", (event) => {
        makeInvisible(element.id);
    });
});

function makeVisible(backgroundName){

    switch(backgroundName){

        case "caracol":
        let caracol = document.getElementById('caracolimg');
        caracol.style.opacity = 1;
        break;

        case "piramide":
        let piramide = document.getElementById('piramideimg');
        piramide.style.opacity = 1;
        break;

        case "baldosa":
        let baldosa = document.getElementById('baldosaimg');
        baldosa.style.opacity = 1;
        break;
    }
}

function makeInvisible(backgroundName){

    switch(backgroundName){

        case "caracol":
        let caracol = document.getElementById('caracolimg');
        caracol.style.opacity = 0;
        break;

        case "piramide":
        let piramide = document.getElementById('piramideimg');
        piramide.style.opacity = 0;
        break;

        case "baldosa":
        let baldosa = document.getElementById('baldosaimg');
        baldosa.style.opacity = 0;
        break;
    }
}