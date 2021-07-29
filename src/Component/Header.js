import React from 'react';

const Header = () => {
    return(
        <div className="mn-header">
            <figure>
                <img src="http://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1453805375669-9ID9T299PS1IFD4W61WM/exportname2+copy1.png"/>
            </figure>
            <div className="mn-nav">
                <ul>
                    <li className="active-menu">Home</li>
                    <li>Stories</li>
                    <li>About</li>
                    <li>Enquire</li>
                </ul>
            </div>
        </div>
    )
}
export default Header
