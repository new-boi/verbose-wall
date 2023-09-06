var qr_btn = document.getElementById("qr_btn");


var pledge = document.getElementById("pledge").value;

qr_btn.onclick=function(){
    var namee = document.getElementById("namee").value;
    // alert(namee)
    // console.log(namee)
    var card_container = document.getElementById("cards");

    var newDiv = document.createElement("div");
    newDiv.classList.add("card");

    var pName = document.createElement("p");
    var pLocation = document.createElement("p");
    var pCard_content = document.createElement("p");

    pName.textContent=namee;
    pLocation.textContent="Gombak";
    pCard_content.textContent="lorem";

    pName.classList.add("card_content","name");
    pLocation.classList.add("card_content","location");
    pCard_content.classList.add("card_content","contents");

    newDiv.appendChild(pName);
    newDiv.appendChild(pLocation);
    newDiv.appendChild(pCard_content);


    card_container.appendChild(newDiv);

    
}