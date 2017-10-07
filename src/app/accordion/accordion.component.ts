import { Component, Input } from '@angular/core';

@Component({
    selector: 'accordion',
    templateUrl: './accordion.component.html'
})
export class AccordionComponent {

    @Input() accordions: Accordion[] = [];
        
    constructor() {
    }
}

export class Accordion {
    constructor(
        public title: string,
        public text: string,
    ){
    }
}