import { Component, OnInit } from '@angular/core';
import * as data from '../../../../data/tracks.json';
import { TrackModel } from "@core/models/tracks.model";

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
    const { data: dataTracks } = data;
    this.tracksTrending = dataTracks;
    this.tracksRandom = dataTracks;
  }

}
