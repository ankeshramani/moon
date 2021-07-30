import React from 'react';
import Header from "../Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg viewBox="0 0 8 18">
                <path
                    d="M7.55.978A.705.705 0 007.413.01a.663.663 0 00-.945.142L.019 9.06l6.433 8.558a.664.664 0 00.947.127.704.704 0 00.121-.972L1.713 9.046z"></path>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg  viewBox="0 0 8 18">
                <path
                    d="M7.55.978A.705.705 0 007.413.01a.663.663 0 00-.945.142L.019 9.06l6.433 8.558a.664.664 0 00.947.127.704.704 0 00.121-.972L1.713 9.046z"></path>
            </svg>
        </div>
    );
}
const Home = () => {
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let array = [
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1531866809836-2RKXZ5H990LQ92YCHN8T/NV2_5700.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1504368425126-6DBOOVHO2IRT3K304D29/20690088_1497909466969836_4181591296703977429_o.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1453836958706-BYUEQH9VWH1UKZS7177H/10982869_866298996797556_1039815685564661834_o.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1540882610954-J97K17GTBMJ9UJDQJPET/DSC_8361.jpg',

    ]

    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="small_container">
                <Slider {...settings}>
                    {
                        array.map((x, i) => {
                            return(
                                <figure className="mn-slide">
                                    <img src={x}/>
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
                <div className="row  w-100 no-gutter">
                    <div className="col  col-md-4  col-12">
                        <figure>
                            <img src='https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1515015611184-20KL59V3EML3OGDAFC21/NVP_Maya%26Neeraj_destinationwedding_Kumarakom.jpg'/>
                        </figure>
                        <div className="mn-image-caption">
                            <span>ASHNA X BRETT // HYDERABAD //</span>
                        </div>
                    </div>
                    <div className="col  col-md-4 col-12 ">
                        <figure>
                            <img src='https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078190489-57YR27IWNV0ZLCZU6TN9/ashnabrett.jpg'/>
                        </figure>
                        <div className="mn-image-caption">
                            <span>ASHNA X BRETT // HYDERABAD //</span>
                        </div>

                    </div>
                    <div className="col  col-md-4 col-12">
                        <figure>
                            <img src='https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078414127-Q07FY2XD2PPEA3VR388F/03_NVP_PIYACYRUS_RECEPTION-4143-side.jpg?format=750w'/>
                        </figure>
                        <div className="mn-image-caption">
                            <span>PIYA X CYRUS // COORG //</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
