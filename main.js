// Function for when the button is clicked
function buttonClicked() {
	// If the background color is currently equal to black, change the background to white and
  // the text to black. If not, make the background black and text white. It is essentially a
  // light mode and dark mode.
	if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

}