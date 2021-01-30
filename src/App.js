import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import {auth , createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";



import {GlobalStyle} from "./global.styles";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { setCurrentUser } from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";


const HatsPage = () => (
<div>
<h1>HATS PAGE</h1>
</div>
)

class App extends React.Component {


  unSubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
     
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          });

          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <GlobalStyle/>
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route   path="/shop" component={ShopPage} />
      <Route exact  path="/checkout" component={CheckoutPage} />
      <Route exact  path="/signin" render={() => this.props.currentUser ? (<Redirect to ="/" />) : (<SignInSignUpPage />)} />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch (setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
