
export const handlePayment = (email, amount) => {

    const publicKey = process.env.API_PUBLIC_KEY

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