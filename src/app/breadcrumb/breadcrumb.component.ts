import { Component, Input } from '@angular/core';

@Component({
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

    @Input() breadcrumbList: Breadcrumb[] = [];

    constructor() {
    }   
}

export class Breadcrumb {

    constructor(
        public url: string,
        public text: string
    ) {

    }    
}
