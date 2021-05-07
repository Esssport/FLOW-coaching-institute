 module.exports = {
     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
         config.module.rules.push({
             test: /\.svg$/,
             use: [
                 'file-loader',
                 'svg-transform-loader'
             ]
         })

         return config
     }
 }