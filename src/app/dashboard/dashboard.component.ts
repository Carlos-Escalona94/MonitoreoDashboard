import { Component, OnInit, ViewChildren, ViewContainerRef, AfterViewChecked, ComponentFactoryResolver, ComponentRef, QueryList, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Panel } from '../shared/models/panel';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChildren('column', { read: ViewContainerRef }) containers: QueryList<ViewContainerRef>;
  components = [];
  panelList: Panel[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: DashboardService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.panelList = this.service.panelList;
  }

  ngAfterViewInit(){

    this.buildDashboard(this.panelList);

    this.cdr.detectChanges();
  }

  buildDashboard(panelList: Panel[]){
    panelList.forEach(element => {
      let component = this.addComponent(element);
      component.instance.properties = element;
      this.components.push(component);
    });
  }

  addComponent(element: Panel): ComponentRef<PanelComponent>{

    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PanelComponent);
    //const container = this.hostContainer.viewContainerRef;
    const component= this.containers.toArray()[element.column - 1].createComponent(componentFactory); 
    let htmlElement: HTMLElement = <HTMLElement>component.location.nativeElement;
  
    htmlElement.style.flex = "1 1 auto";        
    htmlElement.style.order= String(element.position);
    
    return component;
  }

  isNewColumn (index: number): boolean{
    if(index === 0 || this.panelList[index].column !== this.panelList[index - 1].column){
      return true;
    }
    return false;
  }



}
