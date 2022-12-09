import { Pipe, PipeTransform } from '@angular/core';
import { Music } from '../models/music';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(musics: Music[], search: string): Music[] {
    if(typeof(search) === 'undefined' || search.length === 0 ) return musics;
    return musics.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    }

}
