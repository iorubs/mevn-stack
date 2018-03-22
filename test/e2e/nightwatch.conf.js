require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  selenium: {
    host: 'selenium',
    start_session :  true,
    port: 4444,
    debug: true,
    cli_args: {
      'webdriver.chrome.driver': ''
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'selenium',
      silent: true,
      globals: {
        devServerURL: 'http://' + (process.env.HOST || config.dev.host) + ':' + (process.env.PORT || config.dev.port)
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
  }
}
