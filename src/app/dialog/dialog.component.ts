import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './dialog.component.ng.html'
})
export class DialogComponent {

    @Input() dialogItem: Dialog;
        
    constructor() {
    }
}

export class Dialog {
    constructor(
        public title: string,
        public text: string,
        public buttonText: string
    ) {
    }
}
