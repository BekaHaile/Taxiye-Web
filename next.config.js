const withImages = require("next-images");
const withAntdLess = require('next-plugin-antd-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs')
const path = require('path');
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './less/antd-custom.less'), 'utf8'));
module.exports = withImages(withAntdLess({
   
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
    },

    webpack(config) {
      return config;
    },
  
    // ONLY for Next.js 10, if you use Next.js 11, delete this block
    future: {
      webpack5: true,
    },
  }));
