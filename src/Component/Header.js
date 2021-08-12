import React from 'react';
import {useHistory} from "react-router-dom";
import logo from '../Img/logo.png'
const Header = () => {
    let history = useHistory()
    const onRedirect = (url) => {
        history.push(url)
    }
    const url = window.location.pathname
    return(
        <div className="mn-header">
            <figure>
                <img src={logo}/>
            </figure>
            <div className="mn-nav">
                <ul>
                    <li className={url === "/home" ? "active-menu" : ''} onClick={() => onRedirect('/home')}>Home</li>
                    <li className={url === "/stories" ? "active-menu" : ''} onClick={() => onRedirect('/stories')}>Stories</li>
                    <li className={url === "/about" ? "active-menu" : ''} onClick={() => onRedirect('/about')}>About</li>
                    <li className={url === "/enquire" ? "active-menu" : ''} onClick={() => onRedirect('/enquire')}>Enquire</li>
                </ul>
            </div>
        </div>
    )
}
export default Header
