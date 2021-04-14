import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.less']
})
export class LazyComponent implements OnInit {

  
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.router.navigate(['/overlay']) 
  }

}
