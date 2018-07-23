import { Component, Prop, State, Watch, EventEmitter, Event } from '@stencil/core';


@Component({
    tag: 'uikit-button-toggle',
    styleUrl: 'uikit-button-toggle.scss',
    shadow: true
})
export class UikitButtonToggle {
    @Prop() checked: boolean;
    @Prop() labelAccept: string = 'Aprobar';
    @Prop() labelReject: string = 'Rechazar';
    @Prop() onToggle: (e) => void = () => {};
    @State() isChecked: boolean;
    @Event() ontoggle  : EventEmitter;
    componentWillLoad() {
        this.isChecked = this.checked;
    }

    @Watch('checked')
    watchHandler(newValue: boolean) {
        this.isChecked = newValue;
    }
    on(){
        this.isChecked = true;
        this.ontoggle.emit({ checked: this.isChecked });
        this.onToggle(this.isChecked);
    }
    off(){
        this.isChecked = false;
        this.ontoggle.emit({ checked: this.isChecked });
        this.onToggle(this.isChecked);
    }
    render() {
        return (
            <div class="btn-switch">
                <input type="checkbox" checked={this.isChecked} />
                <span class="slider" />
                <div class="buttons">
                    <div role="button" onClick={() => this.on()}>
                        <slot name="icon-accept">
                            <uikit-icon name="accept"></uikit-icon>
                        </slot>
                        {this.labelAccept}
                    </div>
                    <div role="button" onClick={() => this.off()}>
                        <slot name="icon-reject">
                            <uikit-icon name="state-reject"></uikit-icon>
                        </slot>
                        {this.labelReject}
                    </div>
                </div>
            </div>

        );
    }
}
