window.onresize = screen;//when you re-size your window
window.onload = screen;//when your re-sizing your loading

function screen(){//Function to check width of your browser window
    myWidth = window.innerWidth;//window innerwidth
    let move = document.getElementById("size");
    move.style.fontSize = "25px";
    move.innerHTML = "Width : " + myWidth + "px";
}