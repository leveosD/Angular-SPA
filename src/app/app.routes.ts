import { Routes } from '@angular/router';
import {DeviceComponent} from './device.component';
import {DeviceListComponent} from './device-list.component';
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

export const routes: Routes = [
    {path: "device/:id", component: DeviceComponent},
    {path: "device-list", component: DeviceListComponent},
    {path: "", component: HomeComponent},
    {path: "**", component: NotFoundComponent}
];
