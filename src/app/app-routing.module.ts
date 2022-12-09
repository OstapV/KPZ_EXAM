import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicpageComponent } from './pages/musicpage/musicpage.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
  {path: '', component : MusicpageComponent},
  {path: 'playlist', component : PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
