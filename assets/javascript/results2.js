//Pulls API call data stored in session storage and turns it into a variable
let data = JSON.parse(sessionStorage.getItem('apiCallResults'));
var recipeNameArray = [];
var recipeImageArray = [];
var recipeIngredientsArray = [];
console.log(data)


    //Displays recipes based on API call
    //Display Recipe API Call http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=23c56a38&_app_key=0e54a8ce40a665ee3dc2dc122f3dbac7
    //Specific display receipe API call is a seperate function and not needed at this time for our uses
    //Using info generated by original API call
    function displayRecipes(data) {
        console.log(data)
        $("#cardsDiv").empty();
        $(".card-img-overlay").empty();
        $("#card-title").empty();
        var results = data.matches;
        for (var i = 0; i < results.length; i++) {
            var recipeID = (results[i].recipeName);
            var image = '<img src= " ' + results[i].imageUrlsBySize[90].slice(0, -6)
                + '" class="card-img">';
               
            image2 = "<div id='cardID' class='card'>" + image + "</div>";
            recipeID2 = "<div class='card-img-overlay'>" + "<div id='card-title'>" + recipeID + "</div>" + "</div>";
            
            $('#cardsDiv').append(image2);
            $('#cardID').append(recipeID2);
        }
    }

//onloadFunction displays API call data to data cards with the displayRecipes function
function onLoadFunction(){
    displayRecipes(data);
}

$(document).ready(function () {

})

//onloadFunction displays API call data to data cards with the displayRecipes function
function onLoadFunction(){
    displayRecipes(data);  //this needs to be updated with the correct function
}



// function displayRecipes(data) {
//     var results = data.matches;
//     for (var i = 0; i < results.length; i++) {
//         var recipeName = (results[i].recipeName);
//         recipeNameArray.push(recipeName)

//         var recipeImage = '<img src= " ' + results[i].imageUrlsBySize[90].slice(0, -6)+ '" class="recipeImages">';
//         recipeImageArray.push(recipeImage)

//         var recipeIngridents = (results[i].ingredients);
//         recipeIngredientsArray.push(recipeIngridents)

//     }
//     console.log(recipeNameArray);
//     console.log(recipeImageArray);
//     console.log(recipeIngredientsArray);
// }