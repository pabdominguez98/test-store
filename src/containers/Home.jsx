import React, {Fragment} from 'react';
import initialState from '../initialState';
import {Helmet} from 'react-helmet';
import Products from '../components/Products';

const Home = () => {
    return (
        <Fragment> 
            <Helmet>
                <title>T Store- Productos</title>
            </Helmet>
        <Products products={initialState.products} />
        </Fragment>
    );
}

export default Home;