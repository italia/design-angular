import { Component } from '@angular/core';
import { ConstantService } from './constant.service';
import { Alert, EAlertType } from "./alert/alert.component";
import { Accordion } from './accordion/accordion.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

    public alerts: Alert[] = [];
    public accordions: Accordion[] = [];
    

    constructor() {
        this.alerts.push(new Alert("warning", EAlertType.error, "Warning 1", "Descrizione 1"));
        this.alerts.push(new Alert("warning", EAlertType.warning, "Warning 1", "Descrizione 1"));
        this.alerts.push(new Alert("warning", EAlertType.info, "Warning 1", "Descrizione 1"));
        this.alerts.push(new Alert("warning", EAlertType.success, "Warning 1", "Descrizione 1"));


        this.accordions = [
            new Accordion ("aa","aa"),
            new Accordion ("ba","ba"),
            new Accordion ("ca","ca"),
            new Accordion ("da","da"),
            new Accordion ("ea","ea"),
        ]
        
    }
}
