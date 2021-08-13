import React, {useState, useEffect} from 'react';
import Header from "../Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ApiService from "../../ApiService";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg viewBox="0 0 8 18">
                <path d="M7.55.978A.705.705 0 007.413.01a.663.663 0 00-.945.142L.019 9.06l6.433 8.558a.664.664 0 00.947.127.704.704 0 00.121-.972L1.713 9.046z"></path>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg  viewBox="0 0 8 18">
                <path d="M7.55.978A.705.705 0 007.413.01a.663.663 0 00-.945.142L.019 9.06l6.433 8.558a.664.664 0 00.947.127.704.704 0 00.121-.972L1.713 9.046z"></path>
            </svg>
        </div>
    );
}
const Home = () => {
    const apiService = new ApiService()
    const [sliderImage, setSliderImage] = useState([])

    useEffect(() => {
        getSlider()
    }, [])

    const getSlider = async () => {
        const data = await apiService.getSlider()
        if(data.data){
            setSliderImage(data.data)
        }
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                }
            },

        ]
    };

    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="small_container">
                <Slider {...settings}>
                    {
                        sliderImage.map((x, i) => {

                            return(
                                <figure className="mn-slide">
                                    <img src={x.slider_image}/>
                                </figure>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className="mn-home-text-content">
                <h1>"YOU FEEL. I FOCUS. WE FRAME”</h1>
                <p>A wedding is a validation coupled with the showcase of  Love inclusive of various events with exotic venues, food, guests, dresses, jewellery and so on- What if it could never be recorded?</p>
                <p>A chronology of a  couple’s journey where they vow together to be One.</p>
                <h2>WE ARE CREATING FICTION OUT OF REALITY.</h2>
            </div>
            <div className="mn-story-album">
                <div className="row w-100">
                    <div className="col col-md-4 col-12">
                        <figure>
                            <img src='http://moonlightpictures.in/upload/images/banner/banner_1628776638216.jpg'/>
                        </figure>
                        <div className="mn-image-caption">
                            <span>ASHNA X BRETT // SURAT //</span>
                        </div>
                    </div>
                    <div className="col  col-md-4 col-12 ">
                        <figure>
                            <img src='http://moonlightpictures.in/upload/images/banner/banner_1628776288009.jpg'/>
                        </figure>
                        <div className="mn-image-caption">
                            <span>ASHNA X BRETT // SURAT //</span>
                        </div>
                    </div>
                    <div className="col  col-md-4 col-12">
                        <figure>
                            <img src='http://moonlightpictures.in/upload/images/story/story_img_1628776367838.jpg'/>
                        </figure>
                        <div className="mn-image-caption">
                            <span>PIYA X CYRUS // SURAT //</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
