var Requester = require('./requester')()
var utils = require('./utils')
var requester = Requester()


var merchantId = ''
var apikey = ''
/**
 * Resources for Subscription
 *
 **/


var Subscription = function() {
  var id =  ''

  /**
   * Creates a subscription plan
   *
   **/

  this.create = function(param, callback) {
    if(typeof param !== 'object') throw 'Wrong Parameter type object needed'
    utils.append(param, {
      uri: 'plan',
      method: 'POST'
    })
    requester.setParam(param).request(callback)
  }

  /**
   * Updates a subscription plan
   * @param object, callback
   * @returns void
   **/

  this.update = function(param, callback) {
    if(typeof param !== 'object') throw 'Wrong Parameter type object needed'
    id =  param.planId
    delete param.planId
    utils.append(param, {
      uri: 'plan/?PlanId=' + id,
      method: 'PUT'
    })
    requester.setParam(param).request(callback)
  }

  /**
   * Delets a subscription plan
   * @param object, callback
   * @returns void
   **/
  this.delete =  function(param, callback) {
    if(typeof param !== 'object') throw 'Wrong Parameter type object needed'
    id = param.planId
    delete param.planId
    utils.append(param, {
      uri: 'plan/?PlanId=' + id + '&merchantId=' + merchantId + '&apikey=' + apikey,
      method: 'DELETE'
    })
    requester.setParam(param).request(callback)
  }

  /**
   * Fetches  a subscription plan
   * @param object, callback
   * @returns void
   **/

  this.fetch =  function(param, callback) {
    var dummy = {}
    var url = (typeof param === 'function')
      ? 'merchantId=' + merchantId + '&apikey=' + apikey
      : 'PlanId=' + param.planId + '&merchantId=' + merchantId + '&apikey=' + apikey
    var callbackFn = (typeof param === 'function') ? param : callback
    var param = (typeof param === 'function') ? dummy : param
    delete param.planId
    utils.append(param, {
      uri: 'plan/?' + url,
      method: 'GET'
    })
    requester.setParam(param).request(callbackFn)
  }
}

/**
 * Resources for Transaction
 *
 **/

var Transaction = function() {
  /**
   * Verify a particular Transaction
   * @param object, callback
   * @returns void
   **/

  this.verify = function(param, callback) {
    if(typeof param !== 'object') throw 'Parameter expects object'
    utils.append(param, {
      uri: 'verify',
      method: 'POST'
    })
    requester.setParam(param).request(callback)
  }
}

/**
 * Resources for Customer
 *
 **/

var Customer = function() {
  /**
   * Charge Returning Customer
   * @param object, callback
   * @returns void
   **/

  this.chargeReturning = function(param, callback) {
    if(typeof param !== 'object') throw 'Wrong Parameter type object needed'
    utils.append(param, {
      uri: 'returning/charge',
      method: 'POST'
    })
    requester.setParam(param).request(callback)
  }
}

var Resources =  function(id, key){
  if(typeof id === 'undefined' || typeof key === 'undefined') throw 'missing merchantId and apikey'
  merchantId = id
  apikey = key
  requester.apiToken({
    merchantID: merchantId,
    apikey: apikey
  })
}

Resources.prototype.subscription = new Subscription()
Resources.prototype.customer = new Customer()
Resources.prototype.transaction = new Transaction()

module.exports = Resources
