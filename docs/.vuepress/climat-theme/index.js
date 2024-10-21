import { getDirname, path } from 'vuepress/utils'

export { climatTheme }

const __dirname = getDirname(import.meta.url)

const climatTheme = (options) =>
  // returns a theme object
  ({
    name: 'vuepress-theme-foo',

    // path to the client config of your theme
    clientConfigFile: path.resolve(__dirname, 'client.js'),

    // set custom dev / build template
    // if the template is not specified, the default template
    templateBuild: path.resolve(__dirname, 'templates/build.html'),

    // use plugins
    plugins: [
      // ...
    ],

    // other plugin APIs are also available
  })
