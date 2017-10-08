import { Component, Input } from '@angular/core';

@Component({
    selector: 'callout',
    templateUrl: './callout.component.ng.html'
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
        title: string,
        description: string,
        icon: string = ""
    ) {
        this.context = new CalloutContext(title, description, type);
    }
}

export class CalloutContext {
    public modifier: string;

    constructor(
        public title: string,
        public description: string,
        type: ECalloutType
    ) {

        switch (type) {
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

