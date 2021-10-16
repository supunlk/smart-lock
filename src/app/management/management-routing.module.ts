import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from "./management.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'floor',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: 'floor',
        loadChildren: () => import('./floor/floor.module').then(m => m.FloorModule)
      },
      {
        path: 'room',
        loadChildren: () => import('./room/room.module').then(m => m.RoomModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule {
}
