import { Component, Input } from '@angular/core';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {

    @Input() alert: Alert;

    constructor() {
    }
}

export enum EAlertType {
    error,
    warning,
    success,
    info
}

export class Alert {
    public context: AlertContext;

    constructor(
        public name: string,
        type: EAlertType,
        text: string,
        description: string,
        icon: string = ""
    ) {
        this.context = new AlertContext(type, text, description, icon);
    }
}

export class AlertContext {
    public modifier: string;

    constructor(
        public type: EAlertType,
        public text: string,
        public description: string,
        public icon: string
    ) {

        switch (this.type) {
            case EAlertType.error:
                this.modifier = "error"
                break;
            case EAlertType.warning:
                this.modifier = "warning"
                break;
            case EAlertType.info:
                this.modifier = "info"
                break;
            case EAlertType.success:
                this.modifier = "success"
                break;
            default:
                this.modifier = "";
                break;
        }
    }
}


