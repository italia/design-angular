import { inject } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'btn',
    templateUrl: './button.component.html'
})
export class ButtonComponent {

    @Input() buttonItem: Button[] = [];

    constructor() {
    }   
}

export class Button {
    public context: ButtonContext;
    constructor(
        public name: string,
        text: string,
        modifier: EButtonModifier,
        type: EButtonType,
        disabled: boolean = false
    ) {
        this.context = new ButtonContext(text, modifier, type, disabled);
    }    
}

export class ButtonContext {
    public modifier: string;
    public type: string;
constructor(
        public text: string,
        modifier: EButtonModifier,
        type: EButtonType,
        public disabled: boolean
    ) {
        switch (modifier) {
            case EButtonModifier.Default: this.modifier = "default"; break;
            case EButtonModifier.Warning: this.modifier = "warning"; break;
            case EButtonModifier.Info: this.modifier = "info"; break;
            default: this.modifier = ""; break;
        }
        switch (type) {
            case EButtonType.UTextRXS: this.type = "default"; break;
            default: this.type = ""; break;
        }




    }    
}

export enum EButtonModifier {
    Default, Info, Warning   
}

export enum EButtonType {
    UTextRXS   
}
  