import {Serie} from "./serie.js";
import {series} from "./data.js";

let coursesTbody: HTMLElement = document.getElementById('tvSeries')!;
const seasonAvg: HTMLElement = document.getElementById("average-seasons")!;

renderCoursesInTable(series);

function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    let numero_series:number =0;
    let numero_temporadas:number =0;
    
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td class="table-secondary"><strong>${serie.id}</strong></td>
                             <td class="table-secondary nombreserie" id="${serie.id}"><button class="btn btn-link">${serie.name}</button></td>
                             <td class="table-secondary">${serie.cadena}</td>
                             <td class="table-secondary">${serie.temporadas}</td>`;
      
    

      coursesTbody.appendChild(trElement);
      numero_series++;
      numero_temporadas += serie.temporadas;
      trElement.children[1].addEventListener("click", () => lookInfo(serie));
      
    });

    let promedio:number = numero_temporadas/numero_series;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan=3>Seasons Average: ${promedio}</td>`;
    coursesTbody.appendChild(trElement);
  }
function lookInfo(serie:Serie): void{
  console.log(serie);
  let cards: HTMLElement = document.getElementById("cardholder")!;
  let cardInfo: HTMLElement = document.getElementById("cardId")!;
        if(cardInfo!= null){
          cards.removeChild(cardInfo);
        }
        let cardElement: HTMLElement = document.createElement("div");
        let cardBody: HTMLElement = document.createElement("div");
        
        cardElement.setAttribute("class", "card");
        cardElement.setAttribute("id", "cardId");
        cardElement.innerHTML = `<img src="${serie.image}" class="card-img-top" alt="Series image">`
        
        cardBody.setAttribute("class", "card-body");
        cardBody.innerHTML = `<h5 class="card-title">${serie.name}</h5>
                             <p class="card-text">${serie.summary}</p>
                             <a href="${serie.link}" class="btn btn-primary target="blank">Watch it</a>`;
        
        cardElement.appendChild(cardBody);
        cards.appendChild(cardElement);
}

