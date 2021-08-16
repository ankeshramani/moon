import React from 'react';
import {useHistory} from 'react-router-dom'
import logo from '../../Img/whiteTP.png';
import cover from '../../Img/16.jpg'
const FirstPage = () => {
    let history = useHistory()

    const onRedirect = () => {
        history.push('/home')
    }
    return (
        <div className='mn-ent-img' >
            <img className="mn-ent-img-bg" src={cover}/>
            <div className="mn-enter-content" onClick={onRedirect}>
                <figure className="mn-ent-logo">
                    <img src={logo}/>
                </figure>
                <div className="mn-en-btn-content">
                    <button onClick={onRedirect}>ENTER</button>
                </div>

            </div>
        </div>
    )
}
export default FirstPage
