const PROXY_CONFIG = [ 
    {
    context: ['/api'],
    target: 'https://api.sportradar.us',
    secure: true,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    } 
];

module.exports = PROXY_CONFIG;


