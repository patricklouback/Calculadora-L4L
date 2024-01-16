document.addEventListener("DOMContentLoaded", function () {
var button = document.getElementById("button")
button.addEventListener("click",calcularSistema)
function calcularSistema () {
    var consumo = parseFloat(document.getElementById("consumo").value);

    var tamanhoSistema = consumo / 30 / 3.8;

    document.getElementById("resultado").innerText = tamanhoSistema.toFixed(2) + "kWp";
}});