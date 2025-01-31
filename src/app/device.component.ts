import {Component, OnInit} from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";

import {HttpService} from './http.service';
import {Device} from '../assets/Device';

@Component({
  selector: "device",
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: "./device.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HttpService]
})
export class DeviceComponent implements OnInit{
  id: string;
  device: Device;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    const url = "http://localhost:5141/devices/" + this.id;
    console.log("URL: " + url);
    this.httpService.getData(url).subscribe({next: (data:any) => {
        this.device = new Device(data.id, data.name, data.startTime, data.endTime, data.version);
        console.log(data);
        console.log(this.device);
      }
    })
  }
}
