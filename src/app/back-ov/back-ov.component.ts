import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-back-ov',
  templateUrl: './back-ov.component.html',
  styleUrls: ['./back-ov.component.less']
})
export class BackOvComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/lazy']) 
  }

}
