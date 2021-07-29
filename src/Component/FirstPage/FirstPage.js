import React from 'react';
import {useHistory} from 'react-router-dom'
const FirstPage = () => {
    let history = useHistory()

    const onRedirect = () => {
        history.push('/home')
    }
    return (
        <div className='mn-ent-img' onClick={onRedirect}>
            <img className="mn-ent-img-bg" src='https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1612774780935-ADRASH1WGZYHL3SZXC6K/namanverma-cover.jpg'/>
            <div className="mn-enter-content">
                <figure className="mn-ent-logo">
                    <img src="https://static1.squarespace.com/static/56a74ebd1c121044e144939b/t/6020f7e4cc03965c074b36f0/1612773352844/nvplogowhite%281000%29+copy.png"/>
                </figure>
                <div className="mn-en-btn-content">
                    <button onClick={onRedirect}>ENTER</button>
                </div>

            </div>
        </div>
    )
}
export default FirstPage
