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
       console.log("Adding " + songName);
        var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
	    
	    save(songName);
    }
}
