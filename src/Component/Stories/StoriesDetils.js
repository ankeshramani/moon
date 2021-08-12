import React, {useState, useEffect} from "react";
import Header from "../Header";
import ApiService from "../../ApiService";
import { useParams } from "react-router-dom";
import moment from "moment";
const StoriesDetils = () => {
    const apiService = new ApiService()
    const [storyDetailList, setStoryDetailList] = useState([])
    const [storyDetails, setStoryDetails] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getStoryImage()
    }, [])
    const getStoryImage = async () => {
        const data = await apiService.getStoryImage(id);
        if(data && data.storyDetails){
            setStoryDetails(data.storyDetails)
            setStoryDetailList(data.data)
        }
    }
    return(
        <div className="mn-inner-container">
            <Header/>
            <div className="mn-small-container-stories">
                <div className="mn-story-image">
                    <img  className="w-100 " src={storyDetails.banner}/>
                </div>
                <div className="mn-story-desc">
                    <h1>{storyDetails.title}</h1>
                    <span className="story-date">{moment(storyDetails.date).format('MMMM D, YYYY')}</span>
                    {
                        storyDetails && storyDetails.Photographs ?
                            <p className="story-hasTag mn-st-ds-p text-center">
                                Photographs: {storyDetails && storyDetails.Photographs}
                            </p> : ''
                    }
                    {
                        storyDetails && storyDetails.wedding_planning ?
                            <p className="story-hasTag mn-st-ds-p text-center">
                                Wedding Planning & Decor: {storyDetails && storyDetails.wedding_planning}
                            </p> : ''
                    }{
                        storyDetails && storyDetails.Makeup ?
                            <p className="story-hasTag mn-st-ds-p text-center">
                                Makeup: {storyDetails && storyDetails.Makeup}
                            </p> : ''
                    }

                    {
                        storyDetails && storyDetails.wedding_planning ?
                            <p className="story-hasTag mn-st-ds-p text-center">
                                Outfits: {storyDetails && storyDetails.wedding_planning}
                            </p> : ''
                    }
                    {
                        storyDetails && storyDetails.Entertainment ?
                            <p className="story-hasTag  mn-st-ds-p text-center">
                                Entertainment: {storyDetails && storyDetails.Entertainment}
                            </p> : ''
                    } {
                        storyDetails && storyDetails.Location ?
                            <p className="story-hasTag mn-st-ds-p text-center">
                                Location: {storyDetails && storyDetails.Location}
                            </p> : ''
                    }

                </div>
                {/*{
                    storyDetails && storyDetails.music_file === "http://moonlightpictures.in/upload/null" ? "" :
                        <audio controls autoPlay>
                            <source src={storyDetails.music_file} />
                        </audio>
                }*/}

                <div className="mn-story-detils-content">
                    {
                        storyDetailList.map((x, i) => {
                            return(
                                <div>
                                   <img src={x.image}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default StoriesDetils