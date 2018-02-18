// Import our dependencies
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SlaveComponent} from "./components/slave/slave.component";
import {GatewayComponent} from "./components/gateway/gateway.component";
import {GatewaysComponent} from "./components/gateways/gateways.component";

// Define which component should be loaded based on the current URL
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'gateways/:gatewayid/slaves/:slaveid', component: SlaveComponent},
  {path: 'gateways/:gatewayid/slaves', component: GatewayComponent},
  {path: 'gateways', component: GatewaysComponent},
  {path: '**', redirectTo: 'gateways'}
];

export const routing = RouterModule.forRoot(routes);
