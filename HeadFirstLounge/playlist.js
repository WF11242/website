function setUpButtonHandler() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;
    if (songName == "") {
        alert("Please enter a song!");
    } else {
       alert("Adding " + songName); 
    }
}
