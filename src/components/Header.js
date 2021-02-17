import React from 'react';
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <header className='main-header'>
            <Link to='/dashboard'><h1>Pokemon Trainer</h1></Link>
        </header>
    )
}

export default Header;