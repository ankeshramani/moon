import React from 'react';
import Header from "../Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}

            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}

            onClick={onClick}
        />
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
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1540882610954-J97K17GTBMJ9UJDQJPET/DSC_8361.jpg'
    ]

    return(
        <div className="mn-inner-container">
            <Header/>
            <div>
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
        </div>
    )
}
export default Home
