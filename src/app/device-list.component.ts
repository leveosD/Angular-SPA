import {Component} from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

import {Device} from "../assets/Device";
import {HttpService} from "./http.service";

@Component({
  selector: "device-list",
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: "./device-list.component.html",
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class DeviceListComponent{
  devices: Device[] = [];
  constructor(private httpService: HttpService) {
    const url = "http://localhost:5141/devices";
    this.httpService.getData(url).subscribe({next: (data:any) => {
        console.log('Data: ', data);
        this.devices = data;
        console.log("Devices: ", this.devices);
      }
    })
  }
}
