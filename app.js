

/*window.onload = function() {
    var name = prompt("¿cuál es tu nombre?");
    document.getElementById("name").innerText = name;

    var wantToPlay = prompt("¿quieres jugar? s/n");
    if (wantToPlay.toLowerCase() == "s") {
        var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }

        var answer2 = prompt("¿hay laboratoria en concepción? s/n");
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
    } else 
    {
        document.getElementById("warningMessage").innerText = "Bueno Chao";
    }
*/
 

 //Creacion del nombre en HTML 

 function myFunction (){
     var user = document.getElementById("name").value;
     var p = document.getElementById("welcomeMsje");
     p.innerHTML = "Comencemos " + user;
 }

document.getElementById("question-1").addEventListener("click",myFunction);

function myFunction(){
    document.getElementById("question-1").innerHTML ="correcta";
    
}
 

