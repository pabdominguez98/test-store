import React from 'react';

const Product = ({ product, handleAddToCart, handleGrego }) => {

    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Product-item-info">
                <h2>
                    {product.title}
                    <span>$ {product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            { product.title != 'Hoodie' ? (
               <button onClick={handleAddToCart(product)}>Comprar</button>
            ) : (
                <button onClick={handleGrego}>Comprar</button>
            )}
        
        </div>
    );
}

export default Product;