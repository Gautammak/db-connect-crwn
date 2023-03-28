import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Mm9QESCjRRWakbvUpwuKEYGHC1t2HnAm8mwSfjKrpjSR9xCz5tAEyiyYTLreacphkCvCDm8H1NiUaYio9DvubHw00s4FcSmF6";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("payment successfull");
      })
      .catch((error) => {
        console.log("payment error: ", error);
        alert(
          "there was an issue with your payment please sure you use the provided credit card "
        );
      });
  };

  return (
    <StripeCheckout
      label="pay now"
      name="crwn clothing ltd"
      billingAddress
      shippingAddress
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WbNu4npO5QuKGTfvN7zluTpNMWuYofgXk3rSfBOOPg&s"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
