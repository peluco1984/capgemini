import { Component, OnInit } from '@angular/core';
import { CancionModel } from 'src/app/model/cancion.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  cancion =new CancionModel();

  constructor() { }

  ngOnInit(): void {
    this.cancion.id=localStorage.getItem('id');
    this.cancion.title=localStorage.getItem('title');
    this.cancion.url=localStorage.getItem('url');
  }

}
