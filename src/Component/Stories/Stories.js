import React,{useState, useEffect} from 'react';
import Header from "../Header";
import ApiService from "../../ApiService";
import {useHistory} from "react-router-dom";
import moment from "moment";
const Stories = () => {
    const apiService = new ApiService();
    let history = useHistory();
    const [storiesList, setStoriesList] = useState([])
    useEffect(() => {
        storyList()
    }, [])

    const storyList = async () => {
        const data = await apiService.storyList()
        if(data.data){
            setStoriesList(data.data)
        }
    }

    const onRedirect = (id) => {
        history.push(`/stories/${id}`)
    }

    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="mn-small-container-stories">

                    {
                        storiesList.map((x, i) => {
                            return(
                                <div onClick={() => onRedirect(x.story_id)}>
                                    <div className="mn-story-image">
                                        <img  className="w-100 " src={x.banner}/>
                                    </div>
                                    <div className="mn-story-desc">
                                        <h1>{x.title}</h1>
                                        <span className="story-date">{moment(x.date).format('MMMM D, YYYY')}</span>
                                        <p className="story-hasTag">
                                            #kavgetsgroovy
                                        </p>
                                        <a className="story-red-more">Read More</a>
                                        <p className="story-hasTag">
                                            {x.description}
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
                                </div>
                            )
                        })
                    }

            </div>
        </div>
    )
}
export default Stories
