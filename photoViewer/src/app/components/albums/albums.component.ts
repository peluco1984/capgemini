import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  datos: any [] = [];

  constructor(private _service:DatosService) { }

  ngOnInit(): void {
    this._service.getDatos().subscribe(resp =>{
      console.log(resp);
      this.datos=resp;
    });
  }

}
