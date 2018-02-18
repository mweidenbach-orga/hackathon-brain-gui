import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {BrainServiceApi} from "../../services/brainService/api/BrainServiceApi";
import {Router} from "@angular/router";
@Component({
  selector: 'gatewaysoverview',
  templateUrl: 'gatewaysoverview.component.html'
})
export class GatewaysoverviewComponent {
  gateways: any = [];

  constructor(public router: Router, private http: HttpClient, private brainServiceApi: BrainServiceApi) {
    this.getData();
  }

  getData(): void {
    this.brainServiceApi.getStatus().subscribe((data3) => {
      this.gateways = data3['gateways'];
    }, (errData) => {

    }, () => {

    });
  }

  request(slaveId: String, parameterName: String): any {
    this.brainServiceApi.request(slaveId, parameterName).subscribe((request) => {
      console.log(request);
      return request;
    }, (errData) => {

    }, () => {

    });
  }

  goToSlaveoverview(gatewayId: String) {
    this.router.navigateByUrl('/slavesoverview/' + gatewayId);
  }
}
