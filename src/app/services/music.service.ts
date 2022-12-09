import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Music } from '../models/music';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

   musicURL : string;

   musics : Music[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.musicURL = 'https://localhost:44359/api/Musics';
  }

  addMusic(music: Music): Observable<Music> {
    return this.http.post<Music>(this.musicURL, music).pipe(catchError(this.errorHandler.bind(this)));
  }

  getAllMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(this.musicURL)
                        .pipe(
                          catchError(this.errorHandler.bind(this)),
                          tap(musics => this.musics = musics));
  }

  updateMusic(music: Music): Observable<Music> {
    return this.http.put<Music>(this.musicURL + '/' + music.id, music).pipe(catchError(this.errorHandler.bind(this)));
  }

  deleteMusic(music: Music): Observable<Music> {
    return this.http.delete<Music>(this.musicURL + '/' + music.id).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
