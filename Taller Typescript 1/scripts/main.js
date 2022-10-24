import { series } from "./data.js";
var coursesTbody = document.getElementById('tvSeries');
var seasonAvg = document.getElementById("average-seasons");
renderCoursesInTable(series);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    var numero_series = 0;
    var numero_temporadas = 0;
    courses.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-secondary\"><strong>".concat(serie.id, "</strong></td>\n                             <td class=\"table-secondary nombreserie\">").concat(serie.name, "</td>\n                             <td class=\"table-secondary\">").concat(serie.cadena, "</td>\n                             <td class=\"table-secondary\">").concat(serie.temporadas, "</td>");
        coursesTbody.appendChild(trElement);
        numero_series++;
        numero_temporadas += serie.temporadas;
    });
    var promedio = numero_temporadas / numero_series;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=3>Seasons Average: ".concat(promedio, "</td>");
    coursesTbody.appendChild(trElement);
}
