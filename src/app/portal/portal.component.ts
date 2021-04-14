import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef,AfterViewInit
} from "@angular/core";
import {
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal,
  CdkPortal
} from "@angular/cdk/portal";
import { PortalCompComponent } from "./portal-comp/portal-comp.component";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.less']
})
export class PortalComponent implements OnInit,AfterViewInit {
  greeting: any;
  @ViewChild("portalComponentOutlet", { read: CdkPortalOutlet })
  portalComponentOutlet: CdkPortalOutlet;

  @ViewChild("portalTemplateOutlet", { read: CdkPortalOutlet })
  portalTemplateOutlet: CdkPortalOutlet;

  @ViewChild("myCdkPortal", { read: CdkPortal })
  myCdkPortal2: CdkPortal;

  @ViewChild("tpl") tpl: TemplateRef<any>;

  constructor(public view: ViewContainerRef) {}

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    console.log(this.myCdkPortal2);
    let componentPortal = new ComponentPortal(PortalCompComponent);
    let templatePortal = new TemplatePortal(this.tpl, this.view);

    // attach后不可变
    this.portalComponentOutlet.attach(componentPortal);
    // attach后不可变
    this.portalTemplateOutlet.attach(templatePortal);

    // 可以检测自动变更 推荐
    this.greeting = componentPortal;
    setInterval(() => {
      if (this.greeting === templatePortal) {
        this.greeting = componentPortal;
      } else {
        this.greeting = templatePortal;
      }
    }, 1000);
  }
}