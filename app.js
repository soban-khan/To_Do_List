const a=document.querySelector('#to-do');


a.addEventListener("keyup",function(event){
    var temp = document.getElementById('to-do').value;
    var inputData = String(temp);
    inputData = inputData.trim();
    
    const list=document.querySelector(".input")

    if(event.keyCode==13)
    {
        var division=document.createElement("div");
        division.setAttribute("class","list");   
        division.setAttribute("draggable",true);

       

        var box=document.createElement('input');
        box.setAttribute("type","checkbox");
        division.appendChild(box);

        box.addEventListener("click",function(event){
            if(event.target.checked == true)
            newPara.style.cssText='text-decoration:line-through';
            else
            newPara.style.cssText='text-decoration:none';            
        }
        );
    
        var newPara=document.createElement('p');
        const a=document.createTextNode(inputData);
        newPara.appendChild(a);
        division.appendChild(newPara);

        var cross=document.createElement('button');
        // cross.setAttribute("type","button");
        division.appendChild(cross);
        cross.innerHTML=" &#10005;";

        cross.addEventListener('click',function(event){
            division.remove();
        }
        );

        list.appendChild(division);

         // moving function
         division.addEventListener("dragstart",function(e) {
            this.style.opacity = '0.4';  // this / e.target is the source node.
          });
        
        division.addEventListener("dragover",function(e) {
            if (e.preventDefault) {
              e.preventDefault(); // Necessary. Allows us to drop.
            }
          
            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
          
            return false;
          });

          division.addEventListener('drop',function(e) {
            // this / e.target is current target element.
          
            if (e.stopPropagation) {
              e.stopPropagation(); // stops the browser from redirecting.
            }
          
            // See the section on the DataTransfer object.
          
            return false;
          });
        //   function ends

        document.getElementById('to-do').value="";
    }
    
}
);