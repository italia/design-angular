import { Component, Input } from '@angular/core';

@Component({
    selector: 'bullet',
    templateUrl: './bullet.component.ng.html'
})
export class BulletComponent {

    @Input() bulletList: Bullet[] = [];
        
    constructor() {
    }
}

export class Bullet {
    constructor(
        public title: string,
        public text: string,
    ){
    }
}