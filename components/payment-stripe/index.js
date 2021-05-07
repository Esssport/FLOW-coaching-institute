import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../checkout-form";


//TODO: move this to the Checkout component to avoid re-defining
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.

export default function PaymentStripe() {
    const promise = loadStripe("pk_test_51Inv6zLUBOZZIhbxZg5fSrsYbbCvyL4RCEXeXRguiqP4hcDsr1nptINVJsDgvfEDAE5A8YCL5r65uuURycJt74EL00Za6E4Suz");

    return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
