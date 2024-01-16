document.addEventListener("DOMContentLoaded", function () {
var button = document.getElementById("button")
button.addEventListener("click",calcularSistema)
function calcularSistema () {
    var consumo = parseFloat(document.getElementById("consumo").value);
    var linkPreco = document.getElementById("linkPreco");

    var tamanhoSistema = consumo / 30 / 3.8;
    var newLink = "https://www.aldo.com.br/categoria/energia-solar/gerador-de-energia-solar-fotovoltaico/on-grid/growatt?filtro=3:" + tamanhoSistema.toFixed(1) + "~30000"

    console.log(tamanhoSistema.toFixed(2))
    console.log(newLink)

    document.getElementById("resultado").innerText = consumo ? tamanhoSistema.toFixed(2).replace(".", ",") + " kWp" : " - kWp";
    linkPreco.style.display = "inline"
    linkPreco.href = newLink

}});