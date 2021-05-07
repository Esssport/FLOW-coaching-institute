// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")("sk_test_51Inv6zLUBOZZIhbx9axwOJOP8rIOtPOWF7f5cfnQ2byWm9c03grcwbTs1Ly39seWuH876MF6qHqv2zcFbO4mFY0O00nbJz7IOd");

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
  console.log("Done with payment intent")
  // res.status(200).json({ name: 'John Doe' })
  
}
