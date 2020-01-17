const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
 

// module.exports = withCSS({})
// module.exports = withImages()

module.exports = withSass(withCSS(withImages({
    inlineImageLimit: 16384,
    webpack(config, options) {
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,

            // // Read the .env file
            // new Dotenv({
            //     path: path.join(__dirname, '.env'),
            //     systemvars: true
            // })
        ];
        return config
    }
})));