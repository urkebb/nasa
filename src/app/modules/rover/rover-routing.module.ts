import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RoverItemComponent } from './rover-item/rover-item.component';
import { RoverListComponent } from './rover-list/rover-list.component';

const routes: Routes = [
  { path: '', component: RoverListComponent, canActivate: [AuthGuard] },
  { path: ':id', component: RoverItemComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoverRoutingModule {}
