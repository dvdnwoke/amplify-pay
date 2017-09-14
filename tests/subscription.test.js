var Amplify = require('../index')

Amplify = new Amplify('merchantId', 'apikey')

test('Subscription Create test', done => {
  Amplify.subscription.create({
    planName: 'Millionaire',
    frequency: 'Monthly'
  }, function(body, error) {
    expect(error).toBe(false)
    done()
  })
})

test('Subscription Update test', done => {
  Amplify.subscription.update({
    planId: 63932,
    planName: 'Millionair',
    frequency: 'Monthly'
  }, function(body, error) {
    expect(error).toBe(false)
    done()
  })
})


test('Subscription Delete test', done => {
  Amplify.subscription.delete({
    planId: 63932
  }, function(body, error) {
    expect(error).toBe(false)
    done()
  })
})


test('Subscription Fetch test', done => {
  Amplify.subscription.fetch(function(body, error) {
    expect(error).toBe(false)
    done()
  })
})
