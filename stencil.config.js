const sass = require('@stencil/sass');

exports.config = {
    namespace: 'uikit-pacific-components',
    globalStyle: 'src/global/variables.scss',
    plugins: [
        sass()
    ],
    outputTargets:[
        {
        type: 'dist'
        },
        {
        type: 'www',
        serviceWorker: false,
        }
    ]
};
