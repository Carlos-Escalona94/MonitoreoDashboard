import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './panel/panel.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent, PanelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
