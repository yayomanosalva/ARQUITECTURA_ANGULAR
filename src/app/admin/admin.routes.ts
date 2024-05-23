import {Routes} from '@angular/router'
import { AdminLayoutComponent } from './admin-layout/admin-layout.component'
import { DashboardComponent } from './dashboard/dashboard.component'


export const ADMIN_ROUTES: Routes = [
     {path: '', component: DashboardComponent},
     {path: 'admin', component: AdminLayoutComponent},
]