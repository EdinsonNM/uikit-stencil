exports.config = {
    namespace: 'uikit-pacific-components',
    globalStyle: 'src/global/variables.css',
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
