import { series } from "./data.js";
var coursesTbody = document.getElementById('tvSeries');
var seasonAvg = document.getElementById("average-seasons");
renderCoursesInTable(series);
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    var numero_series = 0;
    var numero_temporadas = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-secondary\"><strong>".concat(serie.id, "</strong></td>\n                             <td class=\"table-secondary nombreserie\" id=\"").concat(serie.id, "\"><button class=\"btn btn-link\">").concat(serie.name, "</button></td>\n                             <td class=\"table-secondary\">").concat(serie.cadena, "</td>\n                             <td class=\"table-secondary\">").concat(serie.temporadas, "</td>");
        coursesTbody.appendChild(trElement);
        numero_series++;
        numero_temporadas += serie.temporadas;
        trElement.children[1].addEventListener("click", function () { return lookInfo(serie); });
    });
    var promedio = numero_temporadas / numero_series;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=3>Seasons Average: ".concat(promedio, "</td>");
    coursesTbody.appendChild(trElement);
}
function lookInfo(serie) {
    console.log(serie);
    var cards = document.getElementById("cardholder");
    var cardInfo = document.getElementById("cardId");
    if (cardInfo != null) {
        cards.removeChild(cardInfo);
    }
    var cardElement = document.createElement("div");
    var cardBody = document.createElement("div");
    cardElement.setAttribute("class", "card");
    cardElement.setAttribute("id", "cardId");
    cardElement.innerHTML = "<img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"Series image\">");
    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML = "<h5 class=\"card-title\">".concat(serie.name, "</h5>\n                             <p class=\"card-text\">").concat(serie.summary, "</p>\n                             <a href=\"").concat(serie.link, "\" class=\"btn btn-primary target=\"blank\">Watch it</a>");
    cardElement.appendChild(cardBody);
    cards.appendChild(cardElement);
}
