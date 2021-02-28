import userEvent from '@testing-library/user-event';
import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Total from './Total'
import {auth} from './firebase'
import { useHistory } from 'react-router-dom';
function Checkout() {
    const history =useHistory();
    const [{basket, user},dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='https://www.patriotfcu.org/wp-content/uploads/Web-Banner-Credit-Card-Bal-Xfr.jpg' alr=''/>
                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className='checkout_title'> Your Shopping Basket</h2>
                    {basket.map(item => (<CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}
                </div>
            </div>
            <div className='checkout_right'>
                <Total/>
            </div>

        </div>
    )
}

export default Checkout
