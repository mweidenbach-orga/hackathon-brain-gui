import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './components/app/app.component';
import {BrainServiceApi} from './services/brainService/api/BrainServiceApi';
import {KeysPipe} from "./services/utils/utils.pipe.keyspipe";
import {LoginComponent} from "./components/login/login.component";
import {routing} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {GatewayComponent} from "./components/gateway/gateway.component";
import {GatewaysComponent} from "./components/gateways/gateways.component";
import {SlaveComponent} from "./components/slave/slave.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SlaveComponent,
    GatewaysComponent,
    GatewayComponent,
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
export class AppModule {
}
