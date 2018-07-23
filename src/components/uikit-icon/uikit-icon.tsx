import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'uikit-icon',
    styleUrl: 'uikit-icon.scss',
    shadow: true,
})
export class UikitIcon {
    @Prop() name: any;
    render() {
        return (
            <span class={`icon-${this.name}`}></span>
        );
    }
}
