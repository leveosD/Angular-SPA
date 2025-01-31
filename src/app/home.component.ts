import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: "home",
    standalone: true,
    imports: [RouterLink],
    templateUrl: "./home.component.html",
    styleUrls: ["./app.component.css"],
})
export class HomeComponent{

}
