import { 
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef,AfterViewInit,OnDestroy } from '@angular/core';
import { Overlay,OverlayRef } from "@angular/cdk/overlay";
import { PortalCompComponent } from "../portal/portal-comp/portal-comp.component";
import { OverlayCompComponent } from "./overlay-comp/overlay-comp.component";
import {
  ComponentPortal,
  TemplatePortal,
} from "@angular/cdk/portal";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less']
})
export class OverlayComponent implements OnInit,OnDestroy,AfterViewInit {
  overlayRef:OverlayRef
  userProfilePortal
  overlayPortal
  constructor(private overlay:Overlay,public view: ViewContainerRef) { }

  ngOnInit(): void {
    this.overlayRef = this.overlay.create();
  }
  ngAfterViewInit(){
    this.userProfilePortal = new ComponentPortal(PortalCompComponent);
    this.overlayPortal = new ComponentPortal(OverlayCompComponent);
  }
  attachPortal(){
    this.overlayRef.attach(this.userProfilePortal);
  }
  attachOverlay(){
    this.overlayRef.attach(this.overlayPortal);
  }
  detach(){
    this.overlayRef.detach()
  }
  dispose(){
    setTimeout(() => {
      this.overlayRef.dispose();
    }, 1000);
  }
  ngOnDestroy(){
  }

}
