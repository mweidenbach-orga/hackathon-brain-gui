// Import our dependencies
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SlavesComponent} from "./components/slaves/slaves.component";
import {SlavesoverviewComponent} from "./components/slavesoverview/slavesoverview.component";

// Define which component should be loaded based on the current URL
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'slaves/:id', component: SlavesComponent},
  {path: 'slavesoverview', component: SlavesoverviewComponent},
  {path: '**', redirectTo: 'slavesoverview'}
];

export const routing = RouterModule.forRoot(routes);
