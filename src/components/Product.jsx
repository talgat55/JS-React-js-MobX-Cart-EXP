import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Cart from './Cart';
import ProductList from "@/components/ProductList";

@inject('store')
class Product extends Component{

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    //------
    //  Add to cart product by id
    //-----
    addToCart(id){
        this.props.store.addToCart(id);

        console.log(id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        {
                            this.props.store.products.map((data,index) =>(
                                <ProductList
                                    key={index}
                                    data={data}
                                    index={index}
                                    addToCart= {this.addToCart}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-12 text-center m-t-10">
                    <div className="top-space">
                        <Cart/>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Product);
