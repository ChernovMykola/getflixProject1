const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
 
var Publishable_Key = 'pk_test_51MduCcF9Kx6i6HNZQ8BLmdTNrW3Pbu9IhbcdHYk97YUDQgj8pe190o12GHX29giMSZOhp81NXxjYjT6K2oHdKthr00JIXDuJJn'
var Secret_Key = 'sk_test_51MduCcF9Kx6i6HNZQElaOxMxYLkOqmgnR7qRoQ5wqMNpiJ3zUtnbFjaiKw690OghvKtby5KsZri6sKkaXPU9NUef00aBlB2keV'
 
const stripe = require('stripe')(Secret_Key)
  
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
 
// // View Engine Setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
 
app.get('/', function(req, res){
res.render('Home', {
key: Publishable_Key
})
})

app.post('/payment', function(req, res){
 

    stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
    })
    .then((customer) => {
     
    return stripe.charges.create({
    amount: req.body.sum, 
    description: 'subscription',
    currency: 'USD',
    customer: customer.id
    });
    })
    .then((charge) => {
    res.send("Success") 
    })
    .catch((err) => {
    res.send(err) 
    });
    })
    