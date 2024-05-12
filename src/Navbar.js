import 'bootstrap/dist/css/bootstrap.min.css'; //
import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="container-fluid header" style={{ zIndex: 1000 }}>
            <nav className="row navbar navbar-expand navbar-light bg-light">
                <div className="col-1">
                    <a href="/" className="navbar-brand">
                        <img className="circle" src="https://th.bing.com/th/id/R.f13ddf06ece9a54295070f2455e91849?rik=NZaWO6Q2Y2gynw&pid=ImgRaw&r=0" style={{
                            border:'none',borderRadius:'50%',height:'50%'
                        }} alt="Logo" />
                    </a>
                </div>

                <div className="col-9">
                    <ul className="navbar-nav d-flex flex-row justify-content-around">
                        <li className="nav-item py-2"><a href="/">Home</a></li>
                        <li className="nav-item py-2"><a href="/Contact">Contact</a></li>
                        <li className="nav-item py-2"><a href="/OurTeam">OurTeam</a></li>
                        <li className="nav-item py-2"><a href="/ShopingCard">Shopping Cart</a></li>
                    </ul>
                </div>

                <div className="col">
                    <form action="" className="form d-flex justify-content-around">
                        <input type="text" placeholder="Search" className="form-control input" />
                        <button type="submit" className="btn btn-outline-success">Search</button> 
                    </form>
                </div>
            </nav>
        </header>
    );
}
