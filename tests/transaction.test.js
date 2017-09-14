var Amplify = require('../index')

Amplify = new Amplify('merchantId', 'apikey')

test('Transaction verify', done =>{
  Amplify.transaction.verify({
    transactionRef : 12345
  }, function(body, error){
    expect(error).toBe(false)
    done()
  })

})
