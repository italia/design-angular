import { Component } from '@angular/core';
import { ConstantService } from './constant.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'app';
    public description = "prova 1";

    constructor() {
    }
}
