import React from 'react';
import {useHistory} from 'react-router-dom'
import logo from '../../Img/logo1.png';
import cover from '../../Img/rgerg.jpg'
const FirstPage = () => {
    let history = useHistory()

    const onRedirect = () => {
        history.push('/home')
    }
    return (
        <div className='mn-ent-img' onClick={onRedirect}>
            <img className="mn-ent-img-bg" src={cover}/>
            <div className="mn-enter-content">
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
