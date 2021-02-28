import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
function Header() {
    const [{basket, user},dispatch] = useStateValue();

    const handleAuthentication =() => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img
                className='header_logo' src='https://cdn2.vectorstock.com/i/1000x1000/23/56/dog-pet-store-logo-simple-style-vector-23042356.jpg' 
                />
            </Link>
            <Link to='/' >
                <div className='Logotext'>
                    <span >
                        PET STORE
                    </span>
                </div>
            </Link>
            <div className= 'search_bar'>
                <input className='search' type='text'/>
                <SearchIcon className='search_icon'/>
            </div>
            
            {/* Logo */}
            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication}className='xs'>
                        <span className='head_optLineOne'>
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        
                            <span className='head_optLinetwo'>
                                {user ? 'Sign Out' : 'Sign In'}
                            </span>
                        
                    </div>
                </Link>
                <div className='xs'>
                    <span className='head_optLineOne'>
                        Returns
                    </span>
                    <span className='head_optLinetwo'>
                        & Orders
                    </span>
                </div>

                <div className='xs'>
                    <span className='head_optLineOne'>
                        Your
                    </span>
                    <span className='head_optLinetwo'>
                        Account
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className='basket'>
                        <ShoppingCartIcon  />
                        <span className='head_optLinetwo basketcount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
