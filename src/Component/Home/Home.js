import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Header from "../Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ApiService from "../../ApiService";
import Footer from "../Footer";
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
    let history = useHistory();
    const [sliderImage, setSliderImage] = useState([])
    const [homePageStory, setHomePageStory] = useState([])

    useEffect(() => {
        getSlider()
        getHomePageStory()
    }, [])

    const getSlider = async () => {
        const data = await apiService.getSlider()
        if(data.data){
            setSliderImage(data.data)
        }
    };

    const getHomePageStory = async () => {
        const data = await apiService.homePageStory()
        if(data.data){
            setHomePageStory(data.data)
        }
    };

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
    const onRedirect = (id) => {
        history.push(`/stories/${id}`)
    };
    return(
        <React.Fragment>
            <div className="main_contain_area">
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
                    <h1>"Every moment is fresh beginning”</h1>
                    {/*<p>A wedding is a validation coupled with the showcase of  Love inclusive of various events with exotic venues, food, guests, dresses, jewellery and so on- What if it could never be recorded?</p>
                    <p>A chronology of a  couple’s journey where they vow together to be One.</p>
                   */}

                    <p>Together you are stronger, together you are one!</p>
                    <p>As you wed today, may your feelings and emotions for each other only grow deep and strong with time.</p>
                    <p>In this  auspicious occasion  There is one thing the photograph must contain, the remembrance of the moment.</p>
                    <h2>WE BRING MEMORABLE STORIES TO YOUR LIFE.</h2>
                </div>
                <div className="mn-story-album">
                    <div className="row w-100">
                        {
                            (homePageStory || []).map((x, i) => {
                                return(
                                    x.story_image && x.story_image[0] && x.story_image[0].image ? <div className="col col-md-4 col-12 cursor-pointer" onClick={() => onRedirect(x.story_id)} key={i}>
                                        <figure>
                                            <img src={`http://moonlightpictures.in/upload/${x.story_image && x.story_image[0] && x.story_image[0].image}`}/>
                                        </figure>
                                        <div className="mn-image-caption" style={{paddingTop:7}}>
                                            <span>{x.title} // {x.Location} //</span>
                                        </div>
                                    </div> : ''
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Home
