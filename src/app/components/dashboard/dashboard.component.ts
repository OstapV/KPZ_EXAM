import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  musicDetails !: FormGroup;
  musicObj : Music = new Music();
  musicList : Music[] = [];
  term! : string;

  constructor(private formBuilder : FormBuilder,
    public musicService : MusicService) { }

  ngOnInit(): void {
    this.getAllMusics();

    this.musicDetails = this.formBuilder.group({
      id : [0],
      name : [''],
      path : [''],
    });
  }

  addMusic() {
    console.log(this.musicDetails);
    this.musicObj.id = this.musicDetails.value.id;
    this.musicObj.name = this.musicDetails.value.name;
    this.musicObj.path = this.musicDetails.value.path;

    this.musicService.addMusic(this.musicObj).subscribe(res => {
      console.log(res);
      this.getAllMusics();
    }, err => {
      console.log(err);
    });
  }

  getAllMusics() {

    this.musicService.getAllMusics().subscribe(res => {
      this.musicList = res;
      console.log(res);
    }, err => {
      console.log("fetch error");
    });
  }

  editMusic(music : Music) {
    this.musicDetails.controls['id'].setValue(music.id);
    this.musicDetails.controls['name'].setValue(music.name);
    this.musicDetails.controls['path'].setValue(music.path);
    console.log(this.musicDetails);
  }

  updateMusic() {
    console.log("update start");
    this.musicObj.id = this.musicDetails.value.id;
    this.musicObj.name = this.musicDetails.value.name;
    this.musicObj.path = this.musicDetails.value.path;

    console.log(this.musicObj);

    this.musicService.updateMusic(this.musicObj).subscribe(res => {
      console.log(res);
      this.getAllMusics();
    }, err => {
      console.log("update" + err);
    })
  }

  deleteMusic(music : Music) {
      this.musicService.deleteMusic(music).subscribe(res => {
        console.log("deleted");
        this.getAllMusics();
      }, err => {
        console.log(err);
      })
  }

}
