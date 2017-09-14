# Amplify
Nodejs API wrapper for [Amplify](https://amplifypay.com/).


### Installation

```
npm install amplify-pay
```

### Usage

```js
// Require the library
var Amplify = require('amplify-pay')

var amplify = new Amplify('merchantId', 'apikey')

amplify.subscription.create({
  planName: 'Hey',
  frequency: 'weekly'
}, function (body, error) {
  console.log(body);
})
```

#### Using the library
The resource accepts callback as the last argument.

```js
amplify.subscription.create({
  planName: 'Hey',
  frequency: 'weekly'
}, function (body, error) {
  console.log(body);
})
```

```js
//parameter for chargeReturning
{
  transactionRef : "12345",
  authCode: "567890 A",
  Amount: "100.0000",
  paymentDescription: "Charge return customer",
  customerEmail: "test@tester.com"
}
```

### Resources

- customer
  - chargeReturning
- transaction
  - verify
- subscription
  - create
  - delete
  - update
  - fetch


### Contributing


If you are contributing to the repository, kindly update the necessary files and test file in `/tests`. ensure all tests are passed before sending a PR.
