



let sidebar = document.getElementById("navitems");
let lines = document.getElementById("lines");
let cross = document.getElementById("cross");

function bars() {

    cross.style.display = "block";
    lines.style.display = "none";
    sidebar.style.right = "0";
}



function times() {

    cross.style.display = "none";
    lines.style.display = "block";
    sidebar.style.right = "-250px";



}


