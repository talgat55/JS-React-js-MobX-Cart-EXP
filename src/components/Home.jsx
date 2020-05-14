import React, { Component } from 'react';
import {action, decorate, observable} from "mobx";
import { Route,Link,Switch,Redirect } from 'react-router-dom';
import Store from "../store/Store";
import {Provider} from "mobx-react";
import Product from "./Product";
import Cart from "./Cart";


decorate(Store,{
    products: observable,
    currentCart: observable,
    addToCart: action,
    increaseQuantityInCart: action,
    decreaseQuantityInCart: action,
    removeFromCart: action,
});

const shoppingStore =  new Store();
class Home extends Component {
    render() {
        return(
            <Provider store={shoppingStore}>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link  className="navbar-brand" to="/"> Home</Link>
                        <Link   to="/cart"> View cart</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/"  component={Product} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default Home;