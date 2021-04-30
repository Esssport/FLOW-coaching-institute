
import CheckoutHeader from "../components/checkout-header"
import Layout from "../components/layout"
import Cookies from "js-cookie"
import React from 'react'
import {useEffect, useState} from 'react'
import CheckoutList from "../components/checkout-list"
import FooterCTA from "../components/footer-cta"




const Checkout = props => {
    const cookieCart = Cookies.getJSON("cart")
    const [cart, setCart] = useState(cookieCart)
    // const uniqueSet = new Set(cart)
    // const uniqueCart = [...uniqueSet]
    
    
    useEffect(() => {
        setCart(Cookies.getJSON("cart"))
        console.log("COOKIES", cookieCart)
    }, [])
    console.log("cart", cart)
    return (
        <Layout>
            <CheckoutHeader cart={cart} />
            <CheckoutList cart={cart} />
        </Layout>
    )
}

export default Checkout;
