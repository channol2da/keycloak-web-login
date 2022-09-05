const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/proxy',
        createProxyMiddleware(
            {
                target: 'http://localhost:6001',
                changeOrigin: true,
            }
        )
    ),
        app.use('/api',
            createProxyMiddleware(
                {
                    target: 'http://localhost:6001',
                    changeOrigin: true,
                }
            )
        )
}