import { Component, Input } from '@angular/core';

@Component({
   selector: 'dropdown',
   templateUrl: './dropdown.component.ng.html'
})
export class DropdownComponent {

   @Input() dropdownElement: Dropdown;

   constructor() {
   }
}

export class Dropdown {
   constructor(
       public items: DropdownItem[] = [],
       public name: string = ""
   ) {
   }
}

export class DropdownItem {
    constructor(
        public selected: boolean = false,
        public text: string = "Item",
        public value: string = "Value"
    ) {

        
    }
}
