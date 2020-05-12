import React from 'react';

export default ({data, index,addToCart}) => {
    return (
        <div key={index} className="col-md-3 top-space">
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
                            onClick={addToCart(data.id)}
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