/*
TODO: 
1. Handle Case Sensitivity
2. Handle Input Doesnt Exist
3 Clear Button
4. Realign Text


 /*----- constants -----*/

 const $input = $('input[type="text"]');
 const $locationOne = $("#locationOne");
 const $originOne = $("#originOne");
 const $statusOne = $("#statusOne");


 const $imageOne = $("#imageOne");
 const $imageTwo = $("#imageTwo");
 const $imageThree = $("#imageThree");


 const $locationTwo = $("#locationTwo");
 const $originTwo = $("#originTwo");
 const $statusTwo = $("#statusTwo");

 const $characterOne = $("#characterOne");
 const $characterTwo = $("#characterTwo");
 const $characterThree = $("#characterThree");



 const $locationThree = $("#locationThree");
 const $originThree = $("#originThree");
 const $statusThree = $("#statusThree");

 

const BASE_URL = 'https://rickandmortyapi.com/api/character';


/*----- app's state (variables) -----*/

let rickData;
let termOne;
let termTwo;
let termThree;

/*----- cached element references -----*/

const $collection = $('#collection');
/*----- event listeners -----*/
$('form').on('submit', handleSubmit);


/*----- functions -----*/

function handleSubmit(evt) {
    evt.preventDefault();
    console.log(termOne)
    if (termOne==null){
        termOne = $input.val();
        populateData(termOne, $locationOne, $originOne, $statusOne, $imageOne, $characterOne)
        termTwo=null
    } else if (termTwo==null){
        termTwo = $input.val();
        populateData(termTwo, $locationTwo, $originTwo, $statusTwo, $imageTwo, $characterTwo)
        termThree=null
    } else if (termThree==null){
        termThree = $input.val();
        populateData(termThree, $locationThree, $originThree, $statusThree, $imageThree, $characterThree)
        termOne=null;
    }
     
}

function populateData(term, loc, origin, status, img, character) {
    for(i=0;i<rickData["results"].length; i++){
        if (rickData["results"][i].name==term) {
            loc.text(rickData["results"][i].location.name);
            origin.text(rickData["results"][i].origin.name);
            status.text(rickData["results"][i].status);
            img.attr("src",rickData["results"][i].image)
            character.text(term);

            


            console.log(rickData["results"][i].image)
        }  
    }
}



// executes all inaitail actions when page loads
init(); 

function init() {
// gather all characters when page loads
getData();
}

function getData() {
    $.ajax(BASE_URL)
    .then(function(data) {
        console.log('data: ', data);
        // Assign Data to a globally Accesible Variable
        rickData = data;
        // update the DOM with the Data
        WebGL2RenderingContext();

    }, function(error) {
        console.log('error ', error);
        });

}

// function render () {
//     rickData.results.name.map(function(name)
//     return `${resilts.name}`
// }

//execute all Initial Actions
// Infinity() {

    // gather all data


// function getData() {
// $.ajax(BASE_URL)
// .then(function(data) {
// console.log(data);
// }, function(error) {
//     console.log('error: ', error);
// });
// }