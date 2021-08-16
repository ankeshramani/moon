import React,{useState, useEffect} from 'react';
import Header from "../Header";
import ApiService from "../../ApiService";
import {useHistory} from "react-router-dom";
import moment from "moment";
import likeIcon from '../../Img/icon_like.png'
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

    const addLike = async (id, like_count, ind) => {
        const data = await apiService.addLike(id, like_count +1)
        if(data && data.message == true){
            const clone = [...storiesList];
            clone[ind].like_count = like_count +1
            setStoriesList(clone)
        } else {

        }
    }

    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="mn-small-container-stories">

                    {
                        storiesList.map((x, i) => {
                            return(
                                <div>
                                    <div className="mn-story-image"  onClick={() => onRedirect(x.story_id)}>
                                        <img  className="w-100 " src={x.banner}/>
                                    </div>
                                    <div className="mn-story-desc">
                                        <h1  onClick={() => onRedirect(x.story_id)}>{x.title}</h1>
                                        <span  onClick={() => onRedirect(x.story_id)} className="story-date">{moment(x.date).format('MMMM D, YYYY')}</span>
                                        <p  onClick={() => onRedirect(x.story_id)} className="story-hasTag">

                                        </p>
                                        <a className="story-red-more"  onClick={() => onRedirect(x.story_id)}>Read More</a>
                                        <p className="story-hasTag"  onClick={() => onRedirect(x.story_id)}>
                                            {x.description}
                                        </p>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div>
                                                <span className="mn-like-comment">2 Comments</span>
                                               {/* <span className="mn-like-comment">Share</span>*/}
                                            </div>
                                            <div>
                                                <div className="mn-like-comment d-flex align-items-center" onClick={() => addLike(x.story_id, x.like_count, i)}><img src={likeIcon}/><span style={{paddingTop:3}}>{x.like_count} Likes</span></div>
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
