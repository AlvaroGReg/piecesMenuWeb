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

let position1 = {left: 10, bottom: 65};
let position2 = {left: 25, bottom: 50};
let position3 = {left: 40, bottom: 25};
let position4 = {left: 60, bottom: 65};
let position5 = {left: 80, bottom: 10};
let positions = [position1,position2,position3,position4,position5];
let index = 0;

Array.from(document.getElementsByClassName('positions')).forEach(element => {
    console.log(element)
    element.style.left = positions[index].left + "%";
    element.style.bottom = positions[index].bottom + "%";
    index++;
});