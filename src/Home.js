import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className='home_image' src='https://cdn.shopify.com/s/files/1/0405/7373/0977/files/BANNER_PET_SHOP_1920_2000x.png?v=1591500315'alt=''/>
                <div className='row'>
                    <Product 
                    id='1234567'
                    title='Dog Belt' price={10.99}
                    image='https://cdn.shopify.com/s/files/1/1577/4333/products/40771-Patroller-Leash-Cinder-Cone-Red-WEB_1024x1024.jpg?v=1578934102' 
                    rating={5}/>
                    <Product 
                    id='1234568'
                    title='Pedigree' 
                    price={19.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/915XrPfGKtL._AC_SL1500_.jpg' 
                    rating={4}/>
                </div>
                <div className='row'>
                    <Product
                    id='1234569'
                    title='Cat Food' 
                    price={15.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81asWIyOp%2BL._AC_SL1500_.jpg' 
                    rating={3}/>
                    
                    <Product
                    id='1234572'
                    title='Dog House' 
                    price={55.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71aIezBw3jL._AC_SX679_.jpg' 
                    rating={4}/>
                    
                    <Product
                    id='1234571'
                    title='Bird Cage' 
                    price={33.99} 
                    image='https://i5.walmartimages.com/asr/fa2483ce-bbc5-408b-803f-dceca7dde145.64630a0826927d8490c2dbdd8c23c11a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff' 
                    rating={4}/>
                </div>
                <div className='row'>
                    <Product
                        id='1234570'
                        title='Turtle Tank' 
                        price={51.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81qsaNZK8kL._AC_SL1500_.jpg' 
                        rating={5}/>
                
                </div>
            </div>
            
        </div>
        
    )
}

export default Home
