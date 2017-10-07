import { Component } from '@angular/core';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
})
export class AlertComponent {

    public modifier = "warning"

    public title = 'Si è verificato un errore';
    public description = 'Voluptate ut voluptatem sit earum ipsam sint. Aut unde explicabo eos dolor rerum eum et. Maxime aliquam deserunt. Non officiis eos fugit in perferendis.';

    constructor() {
    }
}

