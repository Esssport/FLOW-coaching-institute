import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import CheckoutItem from '../checkout-item';
import Cookies from 'js-cookie';
// import {
//   PrimaryButton,
//   TransparentButton,
//   CartItemAdded
// } from "components";

const TransparentButton = () => {
  return (
    <button className={styles.transparentButton}>
      <p className={styles.transparentBtnLabel}>Edit Basket</p>
    </button>
  );
};

const PrimaryButton = () => {
  return (
    <button className={styles.primaryButton}>
      <p className={styles.primaryBtnLabel}>Contact Information</p>
    </button>
  );
};


const CheckoutList = (props) => {
  const {cart} = props
  
  const handleClearBasket = () => {
    props.resetCart([])
    Cookies.remove('cart');
  }
  
  return (
    <div className={styles.basketDetailsSection}>
      <div className={styles.flexWrapperOne}>
        <p className={styles.basketLabel}>Your Basket</p>
        <p className={styles.itemCountLabel}>{cart?.length || 0} items</p>
        <PrimaryButton className={styles.primaryButton} />
        <TransparentButton
          className={styles.transparentButton}
        />
        <button onClick={handleClearBasket} className={styles.transparentButtonTwo}>
        <p className={styles.transparentBtnLabelTwo}>Clear Basket</p>
        {/* <p className={styles.transparentBtnLabelTwo}>Promo Code</p> */}
        </button>
      </div>
      {cart?.map( cartItem => {
        return(<CheckoutItem key={cartItem.id} {...cartItem}/>)
      })}
      
    </div>
  );
};

export default CheckoutList;