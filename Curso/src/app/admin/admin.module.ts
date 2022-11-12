import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin.router';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [AdminRoutingModule, CommonModule],
  providers: [],
  exports: [],
})
export class AdminModule {}
