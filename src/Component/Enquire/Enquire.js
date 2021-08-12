import React from "react";
import Header from "../Header";


const Enquire = () => {
    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="mn-story-detils-content ">
                <div className="text-center">
                    <h5>Email: moonlightpicture07@gmail.com </h5>
                    <p>You can draft an email to us on the above mentioned address,  or can send us the details by filling the form below.
                        Thank you!</p>
                </div>
                <div className="row row10 w-100 justify-content-center">
                    <div className="col col-md-4 col-12">
                        <input type="text" className="mn-en-form" placeholder="First name"/>
                    </div>
                    <div className="col col-md-4 col-12">
                        <input type="text" className="mn-en-form" placeholder="Last name"/>
                    </div>
                </div>
                <div className="row row10 w-100 justify-content-center">
                    <div className="col col-md-8 col-12">
                        <input type="text" className="mn-en-form" placeholder="Email"/>
                    </div>
                </div>
                <div className="row row10 w-100 justify-content-center">
                    <div className="col col-md-8 col-12">
                        <input type="text" className="mn-en-form" placeholder="Subject"/>
                    </div>
                </div>
                <div className="row row10 w-100 justify-content-center">

                    <div className="col col-md-8 col-12">
                        <textarea rows="7" className="mn-en-form" placeholder="Message"/>
                    </div>
                </div>
                <div className="row row10 w-100 justify-content-center">
                    <div className="col col-md-8 col-12 ">
                        <div className="text-center">
                            <button className="mn-en-btn">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Enquire
