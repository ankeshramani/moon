import React from 'react';
import {useHistory} from "react-router-dom";

const Header = () => {
    let history = useHistory()

    const onRedirect = (url) => {
        history.push(url)
    }
    return(
        <div className="mn-header">
            <figure>
                <img src="http://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1453805375669-9ID9T299PS1IFD4W61WM/exportname2+copy1.png"/>
            </figure>
            <div className="mn-nav">
                <ul>
                    <li className="active-menu" onClick={() => onRedirect('/home')}>Home</li>
                    <li onClick={() => onRedirect('/stories')}>Stories</li>
                    <li onClick={() => onRedirect('/about')}>About</li>
                    <li onClick={() => onRedirect('/enquire')}>Enquire</li>
                </ul>
            </div>
        </div>
    )
}
export default Header
