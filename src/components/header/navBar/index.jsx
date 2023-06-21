import React from "react";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";



const CartWidget = ()=>{
    return(
        <header className="header">
            <div>
                <input type="checkbox" className="side-menu" id="side-menu" />
                <label className="hamb" htmlFor="side-menu">
                    <FontAwesomeIcon className="icono-nav" icon={faBars} />
                </label>
                <nav className="nav">
                    <ul className="menu">
                        <li><a href="#">NEW</a></li>
                        <li><a href="#">PRENDA EXTERIOR</a></li>
                        <li><a href="#">VESTIDOS|MONOS</a></li>
                        <li><a href="#">CAMISAS|TOPS</a></li>
                        <li><a href="#">PUNTOS</a></li>
                        <li><a href="#">PANTALONES</a></li>
                        <li><a href="#">FALDAS|SHORTS</a></li>
                        <li><a href="#">BOLSOS|ACCESORIOS</a></li>
                    </ul>
                </nav>
            </div>
            <h1 className="logo">CASA DI FIORI</h1>
            <div className="carrito">
            <FontAwesomeIcon class="icono-carrito" icon={faCartShopping} />
            <p>1</p>
            </div>    
        </header>
    )
}

export default CartWidget;
