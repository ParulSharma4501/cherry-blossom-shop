import React from "react";
import {connect} from "react-redux";

import {clearItemFromCart,addItem,removeItem} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem,clearItems,addItem,removeItem}) => {
    const  {name,imageUrl,price,quantity} = cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"></img>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={()=> removeItem(cartItem)}>&#10094;</div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=> clearItems(cartItem)}>&#10008;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItems:item => dispatch(clearItemFromCart(item)),
    addItem:item => dispatch(addItem(item)),
    removeItem:item => dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);