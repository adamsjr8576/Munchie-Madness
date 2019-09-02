var snackButton = document.getElementById('add-snack-button');
var snackName = document.getElementById('snack-name-input');
var snackInfo = document.getElementById('snack-desc');
var munchieCardSection = document.getElementById('grocery-list-add');
var munchieCardName = document.getElementById('card-name');
var munchieCardInfo = document.getElementById('card-info');

//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.
snackButton.addEventListener('click', addSnackCard);
munchieCardSection.addEventListener('click', onMunchieCard);
snackInfo.addEventListener('change', enableSnackButton);
snackName.addEventListener('change', enableSnackButton);

function onMunchieCard() {
  makeCardEditable();
  deleteSnackCard();
}

function addSnackCard() {
	munchieCardSection.innerHTML += `
  <div class="grocery-list-card">
  <p id="card-name" class="munchie-card-text">${snackName.value}</p>
	<p id="card-info" class="munchie-card-text">${snackInfo.value}</p>
	<button type="button" class="delete-card-button">DELETE</button>
  </div>
`
snackName.value = "";
snackInfo.value = "";
snackButton.disabled = true;
}

//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM

function deleteSnackCard() {
  if (event.target.classList.contains('delete-card-button')) {
    event.target.parentNode.remove();
  }
}

//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!

function makeCardEditable() {
  if (event.target.classList.contains('munchie-card-text')) {
    event.target.contentEditable = true;
  }
}

//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled

function enableSnackButton() {
  if(snackName.value.length > 0 && snackInfo.value.length > 0) {
    snackButton.disabled = false;
  }
}
