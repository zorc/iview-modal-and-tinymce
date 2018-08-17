const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        return {
            plugins:[
                new CopyWebpackPlugin([{
                    from:'src/assets'
                }])
            ]
        }
      } else {
        return {
            plugins:[
                new CopyWebpackPlugin([{
                    from:'src/assets'
                }])
            ]
        }
      }
    }
}