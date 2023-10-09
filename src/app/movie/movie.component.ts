import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  constructor(private route:ActivatedRoute, ) {}

  movie = {};

  ngOnInit():void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
