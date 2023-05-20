
export const handlePayment = (email, amount) => {

    const publicKey = 'pk_test_06b7b9a880f02841ec16d5d8c7b7a0dfb42d01b8'

    const handler = PaystackPop.setup({
    key: publicKey, // Replace with your public key
    email: email,
    amount: amount * 100,
    currency: 'GHS',

    onClose: function(){
      alert('Window closed.');
    },

    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();

}