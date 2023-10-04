import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  detalleMarvel:Character | undefined ;
  listaMarvel:Character[] = [];

  constructor(private http:HttpClient) {
    this.http.get('http://localhost:8080/marvel/getCharacters').subscribe((datos:any) => {
      this.listaMarvel = datos.data.results;
    });
  }

  detalle(id:string){
    this.http.get('http://localhost:8080/marvel/getCharactersById?idCharacter='+ id).subscribe((datosId:any) => {
      this.detalleMarvel = datosId.data.results[0];
    });
    let modalDetalle = document.getElementById("modalCharacter");
    if(modalDetalle){
      modalDetalle.style.display = "block";
    }
  }

  cierraDetalle(){
    let modalDetalle = document.getElementById("modalCharacter");
    if(modalDetalle){
      modalDetalle.style.display = "none";
    }
  }

}
