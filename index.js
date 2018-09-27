const chargeCard = require('./chargeCard').chargeCreditCard;
const getTransaction = require('./getTransaction').getTransactionDetails;
const getTransactionList = require('./getTransactionList').getTransactionList;
const refundTransaction = require('./refundTransaction').refundTransaction;

// getTransaction('40018896574', (res) => {
//   console.log('done');
// })

// getTransactionList('12345', (res) => {
//   console.log('done');
// });
//
chargeCard(getTransaction)

// refundTransaction('40018925876');
