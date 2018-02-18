import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {BrainServiceApi} from "../../services/brainService/api/BrainServiceApi";
import {Router} from "@angular/router";
@Component({
  selector: 'slavesoverview',
  templateUrl: 'slavesoverview.component.html'
})
export class SlavesoverviewComponent {
  slaves: any = [];

  constructor(public router: Router, private http: HttpClient, private brainServiceApi: BrainServiceApi) {
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
    console.log('goToSlave called');
    this.router.navigateByUrl('/slaves/' + slaveId);
  }
}
