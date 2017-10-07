import { Component } from '@angular/core';
import { ConstantService } from './constant.service';
import { Alert, EAlertType } from "./alert/alert.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

    public Alerts: Alert[] = [];

    constructor() {
        this.Alerts.push(new Alert("warning", EAlertType.error, "Warning 1", "Descrizione 1"));
        this.Alerts.push(new Alert("warning", EAlertType.warning, "Warning 1", "Descrizione 1"));
        this.Alerts.push(new Alert("warning", EAlertType.info, "Warning 1", "Descrizione 1"));
        this.Alerts.push(new Alert("warning", EAlertType.success, "Warning 1", "Descrizione 1"));
    }
}
