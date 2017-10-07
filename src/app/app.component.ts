import { Component } from '@angular/core';
import { ConstantService } from './constant.service';
import { Alert, EAlertType } from "./alert/alert.component";
import { Accordion } from './accordion/accordion.component';
import { Breadcrumb } from './breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

    public accordionsTest: Accordion[] = [];
    public alertsTest: Alert[] = [];
    public breadcrumbsTest: Breadcrumb[] = [];
    

    constructor() {
        this.accordionsTest = [
            new Accordion ("aa","aa"),
            new Accordion ("ba","ba"),
            new Accordion ("ca","ca"),
            new Accordion ("da","da"),
            new Accordion ("ea","ea"),
        ]

        this.alertsTest = [
            new Alert("warning", EAlertType.error, "Warning 1", "Descrizione 1"),
            new Alert("warning", EAlertType.warning, "Warning 1", "Descrizione 1"),
            new Alert("warning", EAlertType.info, "Warning 1", "Descrizione 1"),
            new Alert("warning", EAlertType.success, "Warning 1", "Descrizione 1")
        ]
        
        this.breadcrumbsTest = [
            new Breadcrumb("http://www.barsanti.gov.it", "hh"),
            new Breadcrumb("http://www.barsanti.gov.it", "devCoseBelle"),
            new Breadcrumb("http://www.barsanti.gov.it", "arcobaleni"),
            new Breadcrumb("http://www.barsanti.gov.it", "hh")
        ]
        
    }
}
