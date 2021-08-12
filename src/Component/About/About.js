import React from "react";
import Header from "../Header";
import img from '../../Img/website.jpg'
const About = () => {
    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="row align-items-center justify-content-center">
                <div className="col col-md-4 col-12 ">
                    <figure className="w-100" style={{margin:0}}>
                        <img className="w-100" src={'https://moonlightpictures.in/upload/website.jpg'}/>
                    </figure>
                </div>
                <div className="col col-md-4 col-12  text-center">
                    <h1>Moonlight Pictures</h1>
                    <p>Moonlight Pictures is a creative venture of Team Moonlight, Was founded by Surat-based photography enthusiasts, Raveeraj and Nikunj, in 2018. </p>
                    <p>
                        Over a short span, the award-winning brand has garnered international acclaim for being one of the most coveted luxury destination wedding photographers and filmmakers.
                    </p>
                    <p>
                        Having worked with several production houses and feature films has helped the duo to bring cinematic flair to the wedding space. With their deft touch.
                    </p>
                    <p>
                        We have left no stone unturned in raising the bar of Wedding Photography across the country.
                    </p>
                    <p>
                        They are known to create evocative and natural photographs that capture the spirit of the day from the biggest moments to the smallest details.
                    </p>
                    <p>We believe in capturing your love stories just as you write them. </p>
                    <p>Over the years we've had the privilege to be a part of countless weddings and each time it feels like capturing a fairytale.</p>
                    <p>We’ve polished our art of wedding photography and cinematography over the years, but one thing that hasn’t changed is the Overwhelming joy that we experience in every wedding.</p>
                    <p>We hope to be a part of your journey and turn it into an everlasting story.</p>
                </div>
            </div>
        </div>
    )
}
export default About
