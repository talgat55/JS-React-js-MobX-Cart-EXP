import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer

class Cart extends Component {
    //-----------
    // Remove product form cart
    //-----------
    removeFromCart(id) {
        this.props.store.removeFromCart(id);
    }

    //---------
    // Increase quantity product
    //------------
    increaseQuantityProduct(id) {
        this.props.store.increaseQuantityInCart(id)
    }


    render() {
        return (
            <div className="card">
                <div>
                    <p>
                        items added to Cart will be displayed here
                    </p>
                </div>
                <div className="row">
                    {
                        this.props.store.currentCart.map((data, index) => (
                            <div key={index} className="cart col-md-3">
                                <img height="30" src={data.image} alt="Product item"/>
                                <div className="product-cart-name">
                                    {data.name}
                                </div>
                                <div className="control">
                                    <span
                                        onClick={()=>this.removeFromCart(data.product_id)}
                                        className="btn btn-danger btn-xs cancel"
                                    >
                                        <i className="fa fa-times"/>
                                    </span>
                                    <span
                                        onClick={()=>this.increaseQuantityProduct(data.product_id)}
                                        className="btn btn-success btn-xs"
                                    >
                                        <i className="fa fa-plus"/>
                                    </span>

                                </div>
                                <div className="quantity">
                                    {data.quantity}
                                </div>
                                <div className="quantity">
                                    {data.price}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default observer(Cart);