import { EventEmitter } from '../../../dist/types/stencil.core.d';
import { Component, Element, Prop, Watch, Event } from '@stencil/core';


@Component({
    tag: 'uikit-button-selector',
    styleUrl: 'uikit-button-selector.scss'
})
export class UikitButtonSelector {
    @Element() listSelector: HTMLElement;
    @Prop({mutable: true}) selected: number;
    @Prop() colorSelected: string = 'warning';
    @Prop() onSelect: (e: number) => void = () => {};
    @Event() onselect  : EventEmitter;

    @Watch('selected')
    watchHandler(newValue: number) {
        const buttons = this.listSelector.querySelectorAll('uikit-button');
        if(newValue < buttons.length)
            buttons[newValue].setAttribute('color', this.colorSelected);
    }
    componentDidLoad() {
        const buttons = Array.from(this.listSelector.querySelectorAll('uikit-button'));
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', this.selectItem.bind(this, btn, index));
        });
    }
    selectItem(btn, index){
        const buttons = Array.from(this.listSelector.querySelectorAll('uikit-button'));
        buttons[this.selected].removeAttribute('color');
        btn.setAttribute('color', this.colorSelected);
        this.selected = index;
        this.onselect.emit({selected: index});
        this.onSelect(index);
    }
    render() {
        return (
            <div>
                <slot>

                </slot>
            </div>
        );
    }
}
