//IPO Pattern

 /*----- constants -----*/

const BASE_URL = 'https://rickandmortyapi.com/api';


/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/

/*----- functions -----*/

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
    }, function(error) {
        console.log('error ', error);
        });

}

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