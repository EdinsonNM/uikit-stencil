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
    @Prop() iconAccept: string = 'accept';
    @Prop() iconReject: string = 'state-reject';
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
                        <uikit-icon name={this.iconAccept}></uikit-icon>
                        {this.labelAccept}
                    </div>
                    <div role="button" onClick={() => this.off()}>
                        <uikit-icon name={this.iconReject}></uikit-icon>
                        {this.labelReject}
                    </div>
                </div>
            </div>

        );
    }
}
