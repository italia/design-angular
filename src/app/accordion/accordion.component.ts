import { Component, Input, ElementRef } from '@angular/core';
import Fraccordion from 'fr-accordion';

@Component({
    selector: 'accordion',
    templateUrl: './accordion.component.html'
})

export class AccordionComponent {

    @Input() accordionsList: Accordion[] = [];

    constructor(private el: ElementRef) {
    }

    // public open: number = 0;

    // public accordionToggle() {
    //     this.open = !this.open ? 1 : 0;
    //     console.log("I am ", (!this.open ? "closed" : "opened" ));
    // }

    ngAfterViewInit() {
        var myAccordion = Fraccordion({
            // String - Use header id on element to tie each accordion panel to its header - see panelIdPrefix
            headerIdPrefix: 'accordion-header',
            // String - Use panel id on element to tie each accordion header to its panel - see headerIdPrefix
            panelIdPrefix: 'accordion-panel',
            // Boolean - If set to false, all accordion panels will be closed on init()
            firstPanelsOpenByDefault: false,
            // Boolean - If set to false, each accordion instance will only allow a single panel to be open at a time
            multiselectable: true,
            // String - Class name that will be added to the selector when the component has been initialised
            readyClass: 'fr-accordion--is-ready'
        });
    }
}

export class Accordion {
    constructor(
        public title: string,
        public text: string,
    ){
    }
}