import { Component,OnInit } from '@angular/core';
import { Overlay } from "@angular/cdk/overlay";
import { registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'base';
  
  constructor() { }

  ngOnInit(): void {
    registerMicroApps([]);
    start({ prefetch: 'all' });
  }
  
}
