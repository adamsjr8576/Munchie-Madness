var snackButton = document.getElementById('add-snack-button')
var snackName = document.getElementById('snack-name-input')
var snackInfo = document.getElementById('snack-desc')
var munchieCardSection = document.getElementById('grocery-list-add')
//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.
snackButton.addEventListener('click', addSnackCard);

function addSnackCard() {
	munchieCardSection.innerHTML += `
  <p>${snackName.value}</p>
	<p>${snackInfo.value}</p>
	<input type="submit" value="DELETE" class="delete-card-button">
`
}

//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM


//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled
