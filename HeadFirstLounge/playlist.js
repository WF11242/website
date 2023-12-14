function setUpButtonHandler() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;
    alert("Adding " + songName);
}
