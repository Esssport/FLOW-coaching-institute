
import CheckoutHeader from "../components/checkout-header"
import Layout from "../components/layout"
import Cookies from "js-cookie"
import React from 'react'
import { useEffect, useState } from 'react'
import CheckoutList from "../components/checkout-list"
import courses from "../courses/courses"
import PaymentSection from "../components/checkout-payment-section"




const Checkout = props => {
    const [cookieCart, setCookieCart] = useState(Cookies.getJSON("cart"))
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [showPayment, setShowPayment] = useState(false)

    useEffect(() => {
        const selectedCourses = courses.filter((course) => cookieCart?.includes(course.id))
        setCart(selectedCourses)
        let total = 0
        if (!cart) return
        for (let i = 0; i < selectedCourses.length; i++) {
            total += Number(selectedCourses[i].price) || 0
        }
        setTotalPrice(total)
    }, [])
    
    const deleteIndexOf = (id) => {
        
    }

    const toggleShowPayment = () => {
        setShowPayment(!showPayment)
    }

    const resetCart = () => {
        setCart([])
        setTotalPrice(0)
    }

    return (
        <Layout>
            <CheckoutHeader toggleShowPayment={toggleShowPayment} price={totalPrice} resetCart={setCart} cart={cart} />
            {showPayment ? <PaymentSection price={totalPrice} /> : ""}
            <CheckoutList resetCart={resetCart} cart={cart} />
        </Layout>
    )
}

export default Checkout;
