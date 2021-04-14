import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { OverlayComponent } from './overlay/overlay.component';
import { BackOvComponent } from './back-ov/back-ov.component';

const routes: Routes = [
  {path:'portal',component:PortalComponent},
  {path:'overlay',component:OverlayComponent},
  {path:'bov',component:BackOvComponent},
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
