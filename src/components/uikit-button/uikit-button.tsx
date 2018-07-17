import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'uikit-button',
    styleUrl: 'uikit-button.css',
    shadow: true
})
export class UikitButton {
    @Prop() primary: boolean;
    @Prop() secondary: boolean;
    @Prop() warning: boolean;
    @Prop() fullwidth: boolean;
    render() {
        const styles = ["btn"];
        if(this.primary) styles.push('btn-primary');
        if(this.secondary) styles.push('btn-secondary');
        if(this.warning) styles.push('btn-warning');
        if(this.fullwidth) styles.push('btn-block');
        return (
        <button class={styles.join(' ')}>
            <slot />
        </button>
        );
    }
}
