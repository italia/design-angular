import { Component, Input } from '@angular/core';
import { EAlertType, Alert, AlertContext } from './alert.modules'

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
})
export class AlertComponent {

    @Input() alert: Alert;

    constructor() {
    }
}

