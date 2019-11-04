import { Component, OnInit } from '@angular/core';
import {ObtenerService} from '../obtener.service';
@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  constructor(public json:ObtenerService){
    this.json.getJson('https://spreadsheets.google.com/feeds/list/1VlMq7txs6bejx4wk5w_YrYiEpYmaXNw3y4OsNUUHxu0/4/public/values?alt=json').subscribe((res:any)=>{
      for (var i = 0; i < res.feed.entry.length; i++) {  
    let dia = res.feed.entry[i].gsx$día.$t;
    let hora = res.feed.entry[i].gsx$hora.$t;
    let conductor = res.feed.entry[i].gsx$conductor.$t;
    let auxiliar = res.feed.entry[i].gsx$auxiliar.$t;
    let lugar = res.feed.entry[i].gsx$lugar.$t;
    let notas = res.feed.entry[i].gsx$notas.$t;
      var regex = /(\d+)/g;
    let elemento = document.createElement('div');
    elemento.className = "event";
    if (dia.length > 0 && hora.length > 0 && notas.length <= 0) {
   elemento.innerHTML+=('<div class="row"><div class="place"><img src="assets/icons/map.svg">'+ lugar+'</div><div class="cond"><b>Conductor: </b>'+conductor+'</div><div class="aux"><b>Auxiliar: </b>'+auxiliar+'</div>');
    }
   if(dia.length > 0 && hora.length > 0 && notas.length >0){
    elemento.innerHTML+=('<div class="row"><div class="place"><img src="assets/icons/map.svg">'+ lugar+'</div><div class="cond"><b>Conductor: </b>'+conductor+'</div><div class="aux"><b>Auxiliar: </b>'+auxiliar+'</div><div class="notes"> <b>Notas: </b> '+notas+' </div></div>');
    }
    if (dia.length > 0 && hora.length > 0) {
         elemento.innerHTML+=('<div class="day"><div class="number">'+dia.match(regex)+'</div><div class="date">'+dia.toUpperCase().substr(0,3)+'</div><div class="time">'+hora+' hs</div></div>');
       }
       document.getElementById('container').appendChild(elemento);
      }
    });
  }


  ngOnInit() {
  }

}
