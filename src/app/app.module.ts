import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { PortalCompComponent } from './portal/portal-comp/portal-comp.component';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayCompComponent } from './overlay/overlay-comp/overlay-comp.component';
import { BackOvComponent } from './back-ov/back-ov.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    PortalCompComponent,
    OverlayComponent,
    OverlayCompComponent,
    BackOvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
