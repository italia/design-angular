import { Component, Input } from '@angular/core';

@Component({
    selector: 'dialog',
    templateUrl: './dialog.component.html'
})
export class DialogComponent {

    @Input() dialogList: Dialog[] = [];
        
    constructor() {
    }
}

export class Dialog {
    constructor(
        public title: string,
        public text: string,
    ){
    }
}