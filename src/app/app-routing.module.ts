import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    //{ path: 'sidebar', loadChildren: './sidebar/sidebar.module#SidebarModule' },
    { path: '**', redirectTo: 'dashboard' } //Direccionando todas las rutas no manejadas
  
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }