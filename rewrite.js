var arr=[];
const list = document.querySelector(".input");

document.querySelector("#to-do").addEventListener("keyup", func);

function func(event)
{
    if (event.keyCode == 13)
    {
        var temp ={
            txt:document.getElementById("to-do").value,
            cross:false
        };
        arr.push(temp);
        document.getElementById("to-do").value = "";
        domRefresh();
    }
}

function domRefresh()
{
    var child=document.querySelector(".input");
    child.innerHTML="";

    for(var i=0;i<arr.length;i++)
    {
        var division = document.createElement("div");
        division.setAttribute("class", "list");
        division.setAttribute('uno',i);

        var box = document.createElement("input");
        box.setAttribute("type", "checkbox");
        division.appendChild(box);

        box.addEventListener("click", strike);

        var newPara = document.createElement("p");
        
        var temp = arr[i].txt;
        
        var a = document.createTextNode(temp);
        newPara.appendChild(a);
        division.appendChild(newPara);

        var cross = document.createElement("button");
        division.appendChild(cross);
        cross.innerHTML = " &#10005;";

        cross.addEventListener("click", remove);

        list.appendChild(division);
    }    
}

function strike(event) {
    var i = event.target.parentElement.getAttribute("uno");
    if (event.target.checked == true)
    {
      event.target.nextSibling.style.cssText = "text-decoration:line-through";
      arr[i].cross=true;
    }
    else
    { 
        event.target.nextSibling.style.cssText = "text-decoration:none";
        arr[i].cross=false;
    }
}

  function remove(event) {
    var i = event.target.parentElement.getAttribute("uno");
    arr.splice(i,1);
    domRefresh();
  }