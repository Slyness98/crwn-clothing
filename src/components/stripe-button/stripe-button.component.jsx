import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HCYJPGqe3yrEu4xfB7Gmd4LN2pjsrncIwtaZtboeyLMwETEzY8czIbJXalg4kwob2dMGMv2TnvHsgeXhplZsgBC00DXU3GeOP';

 const onToken = token => { 
      console.log(token);
      alert('Payment Successful');
}
  
    return (
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
  );
};

export default StripeCheckoutButton;