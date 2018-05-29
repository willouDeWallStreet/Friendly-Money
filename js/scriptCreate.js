function nbOfPeopleFunction() {
    var nbOfPeople = document.getElementById("numberOfPeople").value;

    var usernamesInputsFields = document.getElementById("usernamesInputsFields");

    usernamesInputsFields.innerHTML = "";

    for(var i=0; i<nbOfPeople; i++){
        var partLeftSpace = document.createElement("div");
        partLeftSpace.setAttribute("class","col-sm-3");
        usernamesInputsFields.appendChild(partLeftSpace);

        var partInput = document.createElement("input");
        partInput.setAttribute("class","form-control col-sm-6");
        partInput.setAttribute("id", "username"+i);
        partInput.setAttribute("style","margin-bottom: 1.5%;")
        partInput.setAttribute("type","text");
        partInput.setAttribute("placeholder","Username n°"+(i+1)+"");
        usernamesInputsFields.appendChild(partInput);

        var partRightSpace = document.createElement("div");
        partRightSpace.setAttribute("class","col-sm-3");
        usernamesInputsFields.appendChild(partRightSpace);
    }
}