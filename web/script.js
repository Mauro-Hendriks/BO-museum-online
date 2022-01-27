const myTitle = document.getElementById("myTitle");

const myImage = document.getElementById("myImage");

const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest'),
}

let current_index = 0;

let locaties = [

{
    "titel":"Gang bij docentenkamer",
    "image":"css/img/1.jpg",
    "directions":{
        "noord": 0,
        "west": 2,
        "oost": 5,
        "zuid": 4,
    }
},
]

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;
    updateDirections();

}

function updateDirections(){
    let possible = locaties[current_index].directions;
    
    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}

function goDire(richting){
    let punt_index = locaties[current_index].directions[richting]
    show(punt_index)
}

function getInput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}