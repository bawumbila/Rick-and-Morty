
 /*----- constants -----*/

 const $input = $('input[type="text"]');
 const $locationOne = $("#locationOne");
 const $originOne = $("#originOne");
 const $statusOne = $("#statusOne");



 const $imageOneLink = $("#imageOneLink");
 const $imageTwoLink = $("#imageTwoLink");
 const $imageThreeLink = $("#imageThreeLink");


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
$('#resetButton').on('click', clearContent)




/*----- functions -----*/

function handleSubmit(evt) {
    evt.preventDefault();
    console.log(termOne)
    if (termOne==null){
        termOne = $input.val();
        populateData(termOne, $locationOne, $originOne, $statusOne, $imageOne, $characterOne, $imageOneLink)
        termTwo=null
    } else if (termTwo==null){
        termTwo = $input.val();
        populateData(termTwo, $locationTwo, $originTwo, $statusTwo, $imageTwo, $characterTwo, $imageTwoLink)
        termThree=null
    } else if (termThree==null){
        termThree = $input.val();
        populateData(termThree, $locationThree, $originThree, $statusThree, $imageThree, $characterThree, $imageThreeLink)
        termOne=null;
    }
    $input.val("");
     
}

function populateData(term, loc, origin, status, img, character, link) {
    var findResult = false;
    for(i=0;i<rickData["results"].length; i++){
        if (rickData["results"][i].name.toLowerCase()==term.toLowerCase()) {
            loc.text(rickData["results"][i].location.name);
            origin.text(rickData["results"][i].origin.name);
            status.text(rickData["results"][i].status);
            img.attr("src",rickData["results"][i].image)
            link.attr("href","https://letmegooglethat.com/?q=" + rickData["results"][i].name)
            character.text(rickData["results"][i].name);

            findResult = true;
            console.log(rickData["results"][i].image)
        }  
    }
    if(!findResult) {
        alert("Character Does Not Exist: " + term)
    }
}

function clearContent() {
    $characterOne.text("Character 1");
    $locationOne.text("");
    $originOne.text("");
    $statusOne.text("");
    $imageOne.attr("src", "");

    $characterTwo.text("Character 2");
    $locationTwo.text("");
    $originTwo.text("");
    $statusTwo.text("");
    $imageTwo.attr("src", "");

    $characterThree.text("Character 3");
    $locationThree.text("");
    $originThree.text("");
    $statusThree.text("");
    $imageThree.attr("src", "");

    termOne=null;
    termTwo=null;
    termThree=null;
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

