import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import "./header.styles.scss";

import Logo from "../../assets/bwCherry.png";
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selector";



 const Header = ({currentUser,hidden}) => (
<div className="header">
<Link className="logo-container"  to="/">
<img src={Logo} className="logo" height="50" width="50"></img>
</Link>
<div className="options">
<Link className="option hover-underline-animation"  to="/">
HOME
</Link>
<Link className="option hover-underline-animation"  to="/shop">
SHOP
</Link> 
{/* <Link className="option"  to="/shop">
CONTACT
</Link>  */}
{
currentUser?
<div className="option hover-underline-animation" onClick={() => auth.signOut()}>
SIGN OUT
</div>
:
<Link className="option hover-underline-animation"  to="/signin">SIGN IN</Link>
}
<CartIcon className="cart-icon"/>
</div>
{hidden ? null : <CartDropdown />}
</div>
 )

 const mapStateToProps = createStructuredSelector({
currentUser:selectCurrentUser,
hidden:selectCartHidden
 });

 export default connect(mapStateToProps)(Header);