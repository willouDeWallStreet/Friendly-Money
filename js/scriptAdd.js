function nbOfPeopleFunction() {
    var nbOfPeople = document.getElementById("numberOfPeople").value;
    console.log(nbOfPeople);

    var usernamesInputsFields = document.getElementById("usernamesInputsFields");

    for(var i=0; i<nbOfPeople; i++){
        console.log("Round n°"+i);
        var partLeftSpace = document.createElement("div");
        partLeftSpace.setAttribute("class","col-sm-1");
        usernamesInputsFields.appendChild(partLeftSpace);

        var partLabel = document.createElement("label");
        partLabel.setAttribute("class","col-sm-2 col-form-label");
        partLabel.setAttribute("for","username");
        var labelText = document.createTextNode("Username: ");
        partLabel.appendChild(labelText);
        usernamesInputsFields.appendChild(partLabel);

        var partInput = document.createElement("input");
        partInput.setAttribute("class","form-control col-sm-6");
        partInput.setAttribute("id", "username");
        partInput.setAttribute("style","margin-bottom: 1.5%;")
        partInput.setAttribute("type","text");
        usernamesInputsFields.appendChild(partInput);

        var partRightSpace = document.createElement("div");
        partRightSpace.setAttribute("class","col-sm-3");
        usernamesInputsFields.appendChild(partRightSpace);
    }
}