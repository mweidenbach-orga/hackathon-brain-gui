import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import {BrainServiceApi} from './services/brainService/api/BrainServiceApi';
import {KeysPipe} from "./services/utils/utils.pipe.keyspipe";
import {SlavesComponent} from "./components/slaves/slaves.component";
import {LoginComponent} from "./components/login/login.component";
import {routing} from "./app.routes";
import {SlavesoverviewComponent} from "./components/slavesoverview/slavesoverview.component";
import {FormsModule} from "@angular/forms";
import {GatewaysoverviewComponent} from "./components/gatewayoverview/gatewaysoverview.component";


@NgModule({
  declarations: [
    AppComponent,
    SlavesComponent,
    LoginComponent,
    SlavesoverviewComponent,
    GatewaysoverviewComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [BrainServiceApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
