import { Component, Input } from '@angular/core';

@Component({
    selector: 'entrypoint',
    templateUrl: './entrypoint.component.html'
})
export class AlertComponent {

    @Input() entrypointItem: Entrypoint;

    constructor() {
    }
}


export class Entrypoint {
    public context: Entrypoint;

    constructor(
        public name: string,
        type: string,
        text: string,
        description: string,
        icon: string = ""
    ) {
        this.context = new Entrypoint(type, text, description, icon);
    }
}
