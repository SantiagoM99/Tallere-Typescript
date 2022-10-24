import {Serie} from "./serie.js";
import {series} from "./data.js";

let coursesTbody: HTMLElement = document.getElementById('tvSeries')!;
const seasonAvg: HTMLElement = document.getElementById("average-seasons")!;

renderCoursesInTable(series);

function renderCoursesInTable(courses: Serie[]): void {
    console.log('Desplegando cursos');
    let numero_series:number =0;
    let numero_temporadas:number =0;
    courses.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td class="table-secondary"><strong>${serie.id}</strong></td>
                             <td class="table-secondary nombreserie">${serie.name}</td>
                             <td class="table-secondary">${serie.cadena}</td>
                             <td class="table-secondary">${serie.temporadas}</td>`;
      coursesTbody.appendChild(trElement);
      numero_series++;
      numero_temporadas += serie.temporadas;
    });
    let promedio:number = numero_temporadas/numero_series;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan=3>Seasons Average: ${promedio}</td>`;
    coursesTbody.appendChild(trElement);
  }
