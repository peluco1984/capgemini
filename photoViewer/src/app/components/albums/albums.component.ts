import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { CancionModel } from 'src/app/model/cancion.model';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  datos: any [] = [];
  albunes: any [] = [];


  constructor(private _service:DatosService,
              private router:Router) { }

  ngOnInit(): void {
    this._service.getDatos().subscribe(resp =>{
      
      resp.forEach(element => {
        const found = this.albunes.some(el => el.albumId === element.albumId);
        if (!found) this.albunes.push({ albumId: element.albumId , element })
      });
      console.log(this.albunes);
      this.datos=this.albunes;


    });
  }

  verAlbum(id:string){
    this.router.navigate(['/albumGrid/',id]);
  }

}