import React, {useContext} from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

const Products = () => {
    const {state, addToCart} = useContext(AppContext);
    const {products} = state;


    const handleAddToCart = product => () => {
        addToCart(product);
    }

    const handleGrego = () => {
        alert('Gregorio se la come doblada todos los dias');
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {
                    products.map(product => (
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} handleGrego={handleGrego} />
                    ))
                }
            </div>
        </div>
    );
}

export default Products;