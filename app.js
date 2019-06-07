const a = document.querySelector("#to-do");

a.addEventListener("keyup", func);

function func(event) {
  var temp = document.getElementById("to-do").value;
  var inputData = String(temp);
  inputData = inputData.trim();

  const list = document.querySelector(".input");

  if (event.keyCode == 13) {
    var division = document.createElement("div");
    division.setAttribute("class", "list");
    division.setAttribute("draggable", true);

    division.addEventListener("dragstart", handleDragStart, false);
    division.addEventListener("dragover", handleDragOver, false);
    division.addEventListener('drop', handleDrop, false);
    division.addEventListener("dragend", handleDragEnd, false);

    var box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    division.appendChild(box);

    box.addEventListener("click", strike);

    var newPara = document.createElement("p");
    const a = document.createTextNode(inputData);
    newPara.appendChild(a);
    division.appendChild(newPara);

    var cross = document.createElement("button");
    division.appendChild(cross);
    cross.innerHTML = " &#10005;";

    cross.addEventListener("click", remove);

    list.appendChild(division);

    document.getElementById("to-do").value = "";
  }
}

function strike(event) {
  if (event.target.checked == true)
    event.target.nextSibling.style.cssText = "text-decoration:line-through";
  else event.target.nextSibling.style.cssText = "text-decoration:none";
}

function remove(event) {
  this.parentNode.remove();
}

function handleDragStart(e) {
  this.style.opacity = "0.4";
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = "move";

  return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); 
    }  
    return false;
  }

function handleDragEnd(e) {  
    [].forEach.call(cols, function (col) {
      col.classList.remove('over');
    });
  }