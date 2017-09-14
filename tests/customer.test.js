var Amplify = require('../src/index')

Amplify = new Amplify('merchantId', 'apikey')

test('Charge Returning Customer test', done => {
  Amplify.customer.chargeReturning({
    transactionRef: 12345,
    authCode: '567890 A',
    Amount: '100.0000',
    paymentDescription: 'Charge return customer',
    customerEmail: 'test@tester.com'
  }, function(body, error) {
    expect(error).toBe(false)
    done()
  })
})
