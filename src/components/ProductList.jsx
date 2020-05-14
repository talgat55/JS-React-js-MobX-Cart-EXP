import React from 'react';

const ProductList =  ({data, addToCart}) => {
    return (
        <div className="col-md-3 top-space">
            <div className="card">
                <img
                    className="card-img-top"
                    height="200"
                    src={data.image}
                    alt="Product"
                />
                <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <p className="card-text">{data.description}</p>
                    <div className="detail">
                        <div className="price text-center">$ {data.price}</div>
                        <button
                            onClick={ () => addToCart(data.id)}
                            className="btn btn-primary btn-sm"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default  ProductList;