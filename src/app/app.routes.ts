// Import our dependencies
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SlavesComponent} from "./components/slaves/slaves.component";
import {SlavesoverviewComponent} from "./components/slavesoverview/slavesoverview.component";
import {GatewaysoverviewComponent} from "./components/gatewayoverview/gatewaysoverview.component";

// Define which component should be loaded based on the current URL
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'slaves/:id', component: SlavesComponent},
  {path: 'slavesoverview/:gatewayid', component: SlavesoverviewComponent},
  {path: 'gatewaysoverview', component: GatewaysoverviewComponent},
  {path: '**', redirectTo: 'gatewaysoverview'}
];

export const routing = RouterModule.forRoot(routes);
