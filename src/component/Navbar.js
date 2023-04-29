import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export const Navbar = ({totalCount, modelHandleShow}) => {
    console.log('navbar.js');
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to='/' >
                        <img src='https://nourishstore.co.in/wp-content/uploads/2021/04/splash-screen.png' alt='logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Button variant="primary" onClick={()=>modelHandleShow()}>
                        <i className='fa fa-shopping-cart'></i> ({totalCount})
                    </Button>
                </div>
            </nav>
        </>
    )
}
