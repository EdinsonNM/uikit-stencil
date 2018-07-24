import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'uikit-button',
    styleUrl: 'uikit-button.scss',
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
    @Prop() size: string;
    render() {
        const styles = ["btn"];
        if(this.color) styles.push(`btn-${this.outline ? 'outline-': ''}${this.color}`);
        if(this.fullwidth) styles.push('btn-block');
        if(this.fab) styles.push('btn-fab');
        if(this.disabled) styles.push('btn-disabled');
        if(this.size) styles.push(`btn-${this.size}`);
        return (
        <button class={styles.join(' ')} disabled={!!(this.disabled)}>
            <slot />
        </button>
        );
    }
}
