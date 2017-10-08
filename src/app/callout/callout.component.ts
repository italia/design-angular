import { Component, Input } from '@angular/core';

@Component({
    selector: 'callout',
    templateUrl: './callout.component.html'
})
export class CalloutComponent {

    @Input() calloutItem: Callout;

    constructor() {
    }
}

export enum ECalloutType {
    must,
    should,
    could,
    example
}

export class Callout {
    public context: CalloutContext;

    constructor(
        public name: string,
        type: ECalloutType,
        text: string,
        description: string,
        icon: string = ""
    ) {
        this.context = new CalloutContext(type, text, description, icon);
    }
}

export class CalloutContext {
    public modifier: string;

    constructor(
        public type: ECalloutType,
        public text: string,
        public description: string,
        public icon: string
    ) {

        switch (this.type) {
            case ECalloutType.must:
                this.modifier = "must"
                break;
            case ECalloutType.should:
                this.modifier = "should"
                break;
            case ECalloutType.could:
                this.modifier = "could"
                break;
            case ECalloutType.example:
                this.modifier = "example"
                break;
            default:
                this.modifier = "";
                break;
        }
    }
}

