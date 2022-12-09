import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FocusDirective } from './directives/focus.directive';
import { MusicpageComponent } from './pages/musicpage/musicpage.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PlaylistComponent } from './pages/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GlobalErrorComponent,
    NavigationComponent,
    FocusDirective,
    MusicpageComponent,
    FilterPipe,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
