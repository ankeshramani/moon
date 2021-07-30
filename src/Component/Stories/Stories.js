import React from 'react';
import Header from "../Header";
const Stories = () => {

    const array = [
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1546284850049-CGMPZVCQKKVA8Y6K92L7/blogheaderashnabrett.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1554748596907-YB49AJDRVUI9FIJPVY75/blogheaderZAYNABMIKHAIL2.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1558624227962-LSM4V4W60BHOC3I05YQX/blogheaderpyrus.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1568280900441-K9FHZM35OZ2IMEQZ4JAQ/Cover_ArshiMunir.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1579787009464-AYX2TK0SZQTPGY3URMHD/blogheadersahityavamsi.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1589126956497-YXPKJ3S768PNRFH8HWRU/Shravyasharan.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1621494292958-MCX7MF9LS4AR6M50JT44/TNCOVER.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1546284850049-CGMPZVCQKKVA8Y6K92L7/blogheaderashnabrett.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1554748596907-YB49AJDRVUI9FIJPVY75/blogheaderZAYNABMIKHAIL2.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1558624227962-LSM4V4W60BHOC3I05YQX/blogheaderpyrus.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1568280900441-K9FHZM35OZ2IMEQZ4JAQ/Cover_ArshiMunir.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1579787009464-AYX2TK0SZQTPGY3URMHD/blogheadersahityavamsi.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1589126956497-YXPKJ3S768PNRFH8HWRU/Shravyasharan.jpg',
        'https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1621494292958-MCX7MF9LS4AR6M50JT44/TNCOVER.jpg'
    ]
    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="mn-small-container-stories">

                    {
                        array.map((x, i) => {
                            return(
                                <React.Fragment>
                                    <div className="mn-story-image">
                                        <img  className="w-100 " src={x}/>
                                    </div>
                                    <div className="mn-story-desc">
                                        <h1>KAVYA & KARAN</h1>
                                        <span className="story-date">June  4, 2021</span>
                                        <p className="story-hasTag">
                                            #kavgetsgroovy
                                        </p>
                                        <a className="story-red-more">Read More</a>
                                        <p className="story-hasTag">
                                            Tags destination weddings, Luxury wedding
                                        </p>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div>
                                                <span className="mn-like-comment">2 Comments</span>
                                                <span className="mn-like-comment">Share</span>
                                            </div>
                                            <div>
                                                <span className="mn-like-comment">44 Likes</span>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }

            </div>
        </div>
    )
}
export default Stories
