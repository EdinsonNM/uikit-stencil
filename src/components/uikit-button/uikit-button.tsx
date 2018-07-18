import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'uikit-button',
    styleUrl: 'uikit-button.css',
    shadow: true,
    host: {
        role: 'button'
    }
})
export class UikitButton {
    @Prop() color: string;
    @Prop() fullwidth: boolean;
    @Prop() outline: boolean;
    @Prop() fab: boolean;
    @Prop() disabled: boolean;
    render() {
        const styles = ["btn"];
        if(this.color) styles.push(`btn-${this.outline ? 'outline-': ''}${this.color}`);
        if(this.fullwidth) styles.push(`btn-block`);
        if(this.fab) styles.push(`btn-fab`);
        if(this.disabled) styles.push(`btn-disabled`);
        return (
        <button class={styles.join(' ')}>
            <slot />
        </button>
        );
    }
}
