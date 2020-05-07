import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumGridComponent } from './components/album-grid/album-grid.component';
import { PhotoComponent } from './components/photo/photo.component';


const routes: Routes = [
  {path: 'albums', component: AlbumsComponent},
  {path: 'albumGrid/:id', component: AlbumGridComponent},
  {path: 'photo/:id', component: PhotoComponent},
  {path: '**', pathMatch:'full', redirectTo: 'albums'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
