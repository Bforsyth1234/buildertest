import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.page.html',
  styleUrls: ['./builder.page.scss'],
})
export class BuilderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contentLoaded($event) {
    console.log('$event = ');
    console.log($event);
  }

  contentError(event) {
    console.log('event = ');
    console.log(event);
  }

}
