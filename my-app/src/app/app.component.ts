import { Component } from '@angular/core';
import { ConstantService } from './constant.service';
import { Alert, EAlertType } from "./alert/alert.modules";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public Alert1: Alert;

    constructor() {
        this.Alert1 = new Alert("warning", EAlertType.warning, "Warning 1", "Descrizione 1");
    }
}
