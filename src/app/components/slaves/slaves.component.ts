import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {BrainServiceApi} from "../../services/brainService/api/BrainServiceApi";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'slaves',
  templateUrl: 'slaves.component.html'
})
export class SlavesComponent {
  @Input() id: string;
  slave: any = {};
  successAlert: boolean = false;
  successAlertMessage: string = '';

  constructor(public router: Router, private route: ActivatedRoute, private http: HttpClient, private brainServiceApi: BrainServiceApi) {
    console.log('ngOnInit called');
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    console.log(this.id);
    this.getData();
  }

  onSuccessAlert(successAlertMessage: string) {
    this.successAlert = !this.successAlert;
    this.successAlertMessage = successAlertMessage;

    if (this.successAlert === true) {
      window.setTimeout(() => {
        this.onSuccessAlert(successAlertMessage);
      }, 2000);
    }
  }

  getData(): void {
    const data2 = this.brainServiceApi.getStatus().subscribe((data3) => {
      for (const slave of data3['slaves']) {
        if (slave.id === this.id) {
          this.slave = slave;
          console.log(this.slave);
        }
      }
      this.initData();
    }, (errData) => {
      console.log('error');
    }, () => {
      this.initData();

    });
  }

  updateRequestModel(slaveId: String, parameter: any) {
    this.onSuccessAlert('Request sent.');
    this.brainServiceApi.request(slaveId, parameter.name).subscribe((request) => {
      console.log(request);
      parameter.value = request['value'];
    }, (errData) => {

    }, () => {
    });
  }

  request(slaveId: String, parameterName: String): any {
    this.onSuccessAlert('Request sent.');
    let data: String;
    const data2 = this.brainServiceApi.request(slaveId, parameterName).subscribe((request) => {
      console.log(request);
      data = request['value'];
    }, (errData) => {

    }, () => {
      return data;
    });
  }


  send(slaveId: String, parameterName: String, type: String, value: String): void {
    this.onSuccessAlert('The value of parameter ' + parameterName + ' was set to ' + value + '.');

    const data2 = this.brainServiceApi.send(slaveId, parameterName, type, value).subscribe((request) => {
      console.log(request);
      return request['ret'];
    }, (errData) => {

    }, () => {

    });
  }

  initData() {
    const forkArray = [];

    for (const requestable of this.slave.requestable) {
      forkArray.push(this.brainServiceApi.request(this.slave.id, requestable.name));
    }

    Observable.forkJoin(forkArray).subscribe(results => {
        for (const {item, index} of this.slave.requestable.map((item, index) => ({item, index}))) {
          console.log(item);
          item['value'] = results[index]['value'];
        }
      },
      err => console.error(err));

    for (const sendable of this.slave.sendable) {
      if (sendable.type === 'integer') {
        sendable['value'] = 0;
      }
      if (sendable.type === 'string') {
        sendable['value'] = 0;
      }
      if (sendable.type === 'boolean') {
        sendable['value'] = true;
      }
    }
  }


  goToSlavesoverview() {
    this.router.navigate(['/slavesoverview']);
  }

}
