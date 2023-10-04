import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Bitacora } from 'src/app/models/bitacora.model';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent {
  listaBitacora:Bitacora[] = [];

  constructor(private http:HttpClient) {
    this.http.get('http://localhost:8080/marvel/getBitacoraH2').subscribe((datos:any) => {
      this.listaBitacora = datos;
    });
  }
}
