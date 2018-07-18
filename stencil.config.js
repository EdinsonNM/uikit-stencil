const sass = require('@stencil/sass');

exports.config = {
    namespace: 'uikit-pacific-components',
    globalStyle: 'src/global/variables.css',
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
