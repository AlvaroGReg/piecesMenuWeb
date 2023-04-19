/*BACKGROUNDS ANIM*/
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

let leftPosition = [getRandomInt(20), getRandomInt(40), getRandomInt(60),
    getRandomInt(80), getRandomInt(100)];
let index = 0;
/*GENERATE RANDOM POSITIONS AND ZINDEX*/
Array.from(document.getElementsByClassName('positions')).forEach(element => {

    element.style.left =  leftPosition[index]+ "%";
    index++;
    element.style.bottom = getRandomInt(100) + "%";
    element.style.zIndex = getRandomInt(10);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }