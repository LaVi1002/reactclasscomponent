import React from "react";
import './HeaderComponent.css';

class HeaderComponent extends React.Component {
    render(){
    return(
            <header>
                <ul>
                <li><a className='active' href="#home">HOME</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#gallary">GALLARY</a></li>
                <li><a href="#about">ABOUT</a></li>
                </ul>
            </header>
    )
}
}
export default HeaderComponent;