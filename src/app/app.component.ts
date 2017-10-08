import { Component } from '@angular/core';
import { ConstantService } from './constant.service';
import { Alert, EAlertType } from "./alert/alert.component";
// import { Accordion } from './accordion/accordion.component';
import { Breadcrumb } from './breadcrumb/breadcrumb.component';
import { Button, EButtonModifier, EButtonType } from './button/button.component';
import { Callout, ECalloutType } from './callout/callout.component';
import { Dialog } from './dialog/dialog.component';
import { CookieBar } from  './cookiebar/cookiebar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.ng.html',
  styleUrls: ['./style.css']
})
export class AppComponent {

    // public accordionsTest: Accordion[] = [];
    public alertsTest: Alert[] = [];
    public breadcrumbsTest: Breadcrumb[] = [];
    public buttonTest: Button[] = [];
    public calloutTest: Callout[] = [];
    public dialogTest: Dialog;
    public cookieBarTest: CookieBar;

    constructor() {
        // this.accordionsTest = [
        //     new Accordion ("aa","aa"),
        //     new Accordion ("ba","ba"),
        //     new Accordion ("ca","ca"),
        //     new Accordion ("da","da"),
        //     new Accordion ("ea","ea"),
        // ]

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

        this.buttonTest = [
            new Button("BTN 1", "Testo btn 1", EButtonModifier.Default, EButtonType.UTextRXS),
            new Button("BTN 2", "Testo btn 2", EButtonModifier.Info, EButtonType.UTextRXS),
            new Button("BTN 3", "Testo btn 3", EButtonModifier.Warning, EButtonType.UTextRXS),
            new Button("BTN 4", "Testo btn 4", EButtonModifier.Default, EButtonType.UTextRXS, true)
        ]

        this.calloutTest = [
            new Callout("Callout 1", ECalloutType.should, "Callout 1", "Descrizione Callout 1"),
            new Callout("Callout 2", ECalloutType.could, "Callout 2", "Descrizione Callout 2"),
            new Callout("Callout 3", ECalloutType.must, "Callout 3", "Descrizione Callout 3"),
            new Callout("Callout 4", ECalloutType.example, "Callout 4", "Descrizione Callout 4"),
        ]

        this.dialogTest = new Dialog("Dialog", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tortor vel auctor porta. Nullam aliquam dui mattis arcu dictum, et dignissim lectus viverra. Integer eu diam sollicitudin, euismod nisi nec, tincidunt ligula. Donec ornare magna tortor, sed placerat elit vestibulum et. Vestibulum egestas quis nisl sit amet pellentesque. Cras leo sem, sodales id feugiat sed, fringilla non ligula. Etiam vel pulvinar tellus. Quisque mi nisl, dictum convallis malesuada sed, porttitor at libero. Sed quis sagittis quam. Suspendisse sit amet mi non diam interdum dapibus id vel nisi. Praesent placerat, lacus nec consequat rhoncus, tellus mauris tristique eros, nec malesuada elit nunc a nibh. Nullam venenatis nibh id neque suscipit congue. Proin vitae venenatis sapien. Cras ornare elit vehicula quam vestibulum pretium. Sed malesuada id elit pretium dictum. Curabitur tincidunt odio non nisi efficitur faucibus", "Apri");
        this.cookieBarTest = new CookieBar("Questo sito utilizza cookie tecnici, analytics e di terze parti. Proseguendo nella navigazione accetti l’utilizzo dei cookie", "Accetto", "https://www.google.it");
    }
}
