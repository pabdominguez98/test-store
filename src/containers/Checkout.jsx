import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Checkout.css'
import AppContext from '../context/AppContext';



const Checkout = () => {

    const {state, removeFromCart} = useContext(AppContext);
    const { cart }= state;

    const handleRemove = product => () => {
        removeFromCart(product);
    }

    const handleSumaTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
      <div className="Checkout">
          <div className="Checkout-content">
              <h3>Lista de pedidos</h3>
              <div className="Checkout-item">
                  <div className="Checkout-element">
                      <h4>ITEM name</h4>
                      <span>$10</span>
                  </div>
                  <i className="fas fa-trash-alt" />
              </div>
          </div>
          <div className="Checkout-sidebar">
              <h3>Precio Total: 10</h3>
              <Link to="/checkout/information">
                <button type="button">Continuar Pedido</button>
              </Link>
          </div>
      </div>
    );
}

export default Checkout;