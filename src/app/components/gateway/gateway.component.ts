import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {BrainServiceApi} from "../../services/brainService/api/BrainServiceApi";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'gateway',
  templateUrl: 'gateway.component.html'
})
export class GatewayComponent {
  slaves: any = [];

  @Input() gatewayid: string;

  constructor(public router: Router, private route: ActivatedRoute, private http: HttpClient, private brainServiceApi: BrainServiceApi) {
    this.route.params.subscribe(params => {
      this.gatewayid = params['gatewayid']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.getData();
  }

  getData(): void {
    this.brainServiceApi.getStatus().subscribe((data3) => {
      this.slaves = data3['slaves'];
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

  goToSlave(slaveId: String) {
    this.router.navigateByUrl('/gateways/' + this.gatewayid + '/slaves/' + slaveId);
  }
}
