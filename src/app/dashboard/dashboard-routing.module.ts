import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'floor',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'floor',
        loadChildren: () => import('@shared/floor/floor.module').then(m => m.FloorModule)
      },
      {
        path: 'room',
        loadChildren: () => import('@shared/room/room.module').then(m => m.RoomModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
