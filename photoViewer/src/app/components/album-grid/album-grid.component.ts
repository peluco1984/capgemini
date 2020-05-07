import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { CancionModel } from 'src/app/model/cancion.model';

@Component({
  selector: 'app-album-grid',
  templateUrl: './album-grid.component.html',
  styleUrls: ['./album-grid.component.css']
})
export class AlbumGridComponent implements OnInit {

  id:string;
  canciones: CancionModel [] = [];

  constructor(private _dataService:DatosService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this._dataService.getDatos().subscribe(resp=>{
      resp.forEach(element => {
        if(element.albumId == this.id){
          let aux = new CancionModel();
          aux.title=element.title;
          aux.url=element.url;
          aux.thumbnailUrl= element.thumbnailUrl;
          this.canciones.push(aux);
        }
      });
    });
  }

  verCancion(url:string){
      this.router.navigate(['/photo/',url]);
  }

}
