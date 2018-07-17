import { TestWindow } from '@stencil/core/testing';
import { UikitButton } from './uikit-button';

describe('my-component', () => {
    it('should build', () => {
        expect(new UikitButton()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLMyComponentElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
        testWindow = new TestWindow();
        element = await testWindow.load({
            components: [UikitButton],
            html: '<uikit-button></uikit-button>'
        });
        });

    });
});
