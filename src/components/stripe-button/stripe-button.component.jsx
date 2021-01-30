import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 73;
    const publishableKey = "pk_test_51IEIIuK75TIfIhw18PxVWiXWKiutRsXe1u92OIgWb8LlA672XgiS4hZNzohnc3t6jVBlZV6GXPUA680CLG9AEs08008Pp2UENr";

   const onToken = token => {
        console.log(token);
        alert("Payment Successful!");
}
    return (
        <StripeCheckout 
            label="Pay Now"
            name="Cherry Blossom Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://www.pinclipart.com/picdir/middle/55-559498_black-and-white-cherry-blossom-clipart-png-download.png"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;