const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties =
[{
    "titel":"De ingang",
    "image":"img/R/hetbegin.jpg",
    "directions": {
        "noord": 1
    }
},
{
    "titel":"1 noord plein",
    "image":"img/R/noord.jpg",
    "directions": {
        "west": 2,
        "oost": 3,
        "noord": 4,
        "zuid": 0
    }
},
{
    "titel":"2 west plein",
    "image":"img/R/west.jpg",
    "directions": {
        "west": 5,
        "oost": 1
    }
},
{
    "titel":"3 oost plein",
    "image":"img/R/oost.jpg",
    "directions": {
        "oost": 6,
        "west": 1
    }
},
{
    "titel":"4 N",
    "image":"img/R/paint.jpg",
    "directions": {
        "oost": 14,
        "zuid": 1
    }
},
{
    "titel":"5 W",
    "image":"img/R/walvis.jpg",
    "directions": {
        "noord": 8,
        "oost": 2
    }
},
{
    "titel":"6 kaart",
    "image":"img/R/kaart.jpg",
    "directions": {
        "oost": 7,
        "west": 3
    }
},
{
    "titel":"7 schip modellen",
    "image":"img/R/boats.jpg",
    "directions": {
        "west": 6
    }
},
{
    "titel":"schilderij van oorlog op zee 8",
    "image":"img/R/schilderij.jpg",
    "directions": {
        "noord": 9,
        "zuid": 5
    }
},
{
    "titel":"kanon 9",
    "image":"img/R/kanon.jpg",
    "directions": {
        "noord": 10,
        "zuid": 8
    }
},
{
    "titel":"schipmodel de zeven provincien 10",
    "image":"img/R/schip.jpg",
    "directions": {
        "noord": 11,
        "zuid": 9
    }
},
{
    "titel":"plaats 11",
    "image":"img/R/bol.jpg",
    "directions": {
        "west": 12,
        "oost": 13,
        "zuid": 10
    }
},
{
    "titel":"plaats 12",
    "image":"img/R/michyl.jpg",
    "directions": {
        "west": 11
    }
},
{
    "titel":"plaats 13",
    "image":"img/R/boot.jpg",
    "directions": {
        "west": 11
    }
},
{
    "titel":"scheepsdecor 14",
    "image":"img/R/decor.jpg",
    "directions": {
        "zuid": 15,
        "west": 4
    }
},
{
    "titel":"navigatie 15",
    "image":"img/R/nav.jpg",
    "directions": {
        "noord": 14,
        "zuid": 16
    }
},
{
    "titel":"schatten",
    "image":"img/R/red_room.jpg",
    "directions": {
        "noord": 15
    }
},
];

function show(index){
    myTitle.innerHTML =lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    updateDirection();
}

function updateDirection(){
    let possible = lokaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}

function getInput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus(); 
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}

show(0);