var request = require('request')
const querystring = require('querystring');
var utils =  require('./utils')

var globalParam = {}
/**
 * Exports RequestHandler class
 * Which can be intansiated *
 */

module.exports = function () {
  return RequestHandler;

}

/**
 * request handler
 *
 */

function RequestHandler() {
  if(!(this instanceof RequestHandler)){
    return new RequestHandler()
  }
  var config = {}
  this.request = function(callback) {
    request(config, function (error, response, body) {
      if(typeof callback === 'function'){
        error = checkError(body)
        callback(body, error)
      }
    })
  }
  this.setParam = function(obj) {
    config = prepareParam(obj)
    return this
  }
  this.apiToken = function(obj){
    globalParam = obj
  }
}


/**
 * Returns default config
 *
 */

function defaultConfig() {
  return {
    baseUrl: 'https://api.amplifypay.com/merchant',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'

    }
  }
}

/**
 * Check if response from Amplify
 * contains Message key which is used
 * to display error.
 */

function checkError(body) {
  var result = JSON.parse(body)
  if(utils.existInObj('Message', result)){
    return true
  }
  return false
}

/**
 * Returnings single key from defaultConfig()
 */

function returnSingleDefault(key){
  var obj = defaultConfig()
  return obj[key]
}

/**
 * Prepares parameters to match amplify
 * payment api parameters
 * before request function
 */

function prepareParam(value){
  var config = utils.append(value, defaultConfig(), globalParam)
  config.form = {}
  var key = ''
  for(key in config){
    if(config.hasOwnProperty(key)){
      if(!utils.existInObj(key, defaultConfig())){
        if(key === 'uri' || key === 'url' || key === 'form' || key === 'qs') continue
        config.form[key] = config[key]
        delete config[key]
      }
    }
  }
  return config;
}
