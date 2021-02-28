import React from 'react'
import './Total.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getTotal } from './reducer';
import { useHistory } from 'react-router-dom';
function Total() {
    const history =useHistory();
    const [{basket},dispatch] = useStateValue();
    
    return (
        <div className='total'>
            <CurrencyFormat renderText={(value) =>(
                <>
                    <h1>
                        Total ({basket?.length} Items):
                    </h1>
                    <h1>
                        <strong>{value}</strong>
                    </h1>
                    <p className='total_gift'>
                        <input type='checkbox' /> This order is a gift
                    </p> 
                </>
            )}
            decimalScale={2}
            value={getTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button onClick={e=>history.push('/payment')}> Proceed to Checkout</button>
        </div>
    )
}

export default Total
