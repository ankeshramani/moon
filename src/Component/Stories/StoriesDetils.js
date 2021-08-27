import React, {useState, useEffect} from "react";
import Header from "../Header";
import ApiService from "../../ApiService";
import {useHistory, useParams} from "react-router-dom";
import moment from "moment";
import likeIcon from "../../Img/icon_like.png";
import Footer from "../Footer";

const initialState ={
    'story_id': '',
    'comment': '',
    'name': '',
    'email': '',
    'web_url': '',
}
const initialStateAddressError ={
    'name': '',
    'email': '',
}
const StoriesDetils = () => {
    const apiService = new ApiService()
    const [storyDetailList, setStoryDetailList] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [storyDetails, setStoryDetails] = useState([]);
    const [isPostComment, setIsPostComment] = useState(false);
    const [commentDetails, setCommentDetails] = useState(initialState);
    const [formError, setErrors] = useState(initialStateAddressError);
    const [nextRecord, setNextRecord] = useState({title:'', story_id:'', Location:''});
    const [preRecord, setPreRecord] = useState({title:'', story_id:'', Location:''});
    const {id} = useParams();
    let history = useHistory();

    const storyList = async () => {
        const data = await apiService.storyList()
        if(data.data){
            let currentIndex = data.data.findIndex((x) => x.story_id == id)
            let nexIndex = (currentIndex + 1) === data.data.length ? 0 :  currentIndex + 1 ;
            let priIndex =  currentIndex -1;
            if(nexIndex !== 0){
                setNextRecord({...data.data[nexIndex]})
            } else{
                setNextRecord({title:'', story_id:'', Location:''})
            }
            if(priIndex !== -1){
                setPreRecord({...data.data[nexIndex]})
            } else {
                setPreRecord({title:'', story_id:'', Location:''})
            }

        }
    }

    useEffect(() => {
        getStoryImage()
        getComment()
    }, [id]);

    useEffect( () => {
        storyList()

    }, [id])

    const getStoryImage = async () => {
        const data = await apiService.getStoryImage(id);
        if(data && data.storyDetails){
            setStoryDetails(data.storyDetails)
            setStoryDetailList(data.data)
        }
    };

    const onNextStory = () => {
        if(nextRecord.story_id){
            window.scrollTo(0, 0)
            history.replace(`/stories/${nextRecord.story_id}`)
        }
    }
    const onPrivStory = () => {
        if(preRecord.story_id){
            window.scrollTo(0, 0)
            history.replace(`/stories/${preRecord.story_id}`)
        }
    }

     const getComment = async () => {
            const data = await apiService.getComment(id);
            if(data && data.data){
                setCommentList(data.data)
            }
        };


    const addLike = async () => {
        const data = await apiService.addLike(id, storyDetails.like_count +1)
        if(data && data.message == true){
            setStoryDetails({...setStoryDetails, like_count:storyDetails.like_count +1})
        } else {

        }
    };

    const onChangeText = (event) => {
        setCommentDetails({...commentDetails, [event.target.name]: event.target.value})
        setErrors(formError => ({
            ...formError,
            [event.target.name]: formValidate(event.target.name, event.target.value)
        }));
    };

    const formValidate = (name, value) => {
        switch (name) {
            case "name":
                if (!value || value.trim() === "") {
                    return "Please Enter Name";
                } else {
                    return "";
                }
            case "email":
                const email_pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
                if(!value || value.trim() === ""){
                    return  "Please Enter Email.";
                } else if(email_pattern.test(value)== ""){
                    return  "Please Enter valid Email";
                }else{
                    return "";
                }
            default: {
                return "";
            }
        }
    };

    const onComment = () => {
        setIsPostComment(true)
    };

    const onAddComment =async () => {
        let validationErrors = {};
        Object.keys(commentDetails).forEach(name => {
            const error = formValidate(name, commentDetails[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const payload={
            'story_id': id,
            'comment': commentDetails.comment,
            'name': commentDetails.name,
            'email': commentDetails.email,
            'web_url': commentDetails.web_url,
            create_date: new Date()
        };
        const data = await apiService.postComment(payload)
        if(data && data.data && data.data.name){
            getComment()
            setIsPostComment(false)
            setCommentDetails(initialState)

        }
    };

    return(
        <div>
            {
                !isPostComment ?
                   <React.Fragment>
                       <div className="mn-inner-container main_contain_area">
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
                               {
                                   storyDetails.music_file === "http://moonlightpictures.in/upload/null" ? "" : <div className="mn-story-detils-content">
                                       <audio autoPlay={true} loop="true" src={storyDetails.music_file} controlsList="nodownload" controls />
                                   </div>
                               }



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
                           <div className="mn-story-comment-content">
                               <div className="d-flex flex-wrap justify-content-between mn-story-desc">
                                   <div>
                                       <span className="mn-like-comment">{commentList && commentList.length} {commentList && commentList.length >=1 ? "Comment":"Comments"}</span>
                                       {/* <span className="mn-like-comment">Share</span>*/}
                                   </div>
                                   <div>
                                       <div className="mn-like-comment d-flex align-items-center" onClick={addLike}><img src={likeIcon}/><span style={{paddingTop:3}}>{storyDetails && storyDetails.like_count} Likes</span></div>
                                   </div>
                               </div>
                                <div className="mn-next-story">
                            {preRecord.title && preRecord.story_id ? <p className="priv-page" onClick={onPrivStory}>← {preRecord.title} | {preRecord.Location}</p> :<span>&nbsp;</span> }
                            {nextRecord.title && nextRecord.story_id ? <p className="next-page" onClick={onNextStory}>{nextRecord.title} | {nextRecord.Location} →</p> :<span>&nbsp;</span> }
                        </div>
                               <h4>COMMENT</h4>
                               <textarea className="mn-comment-textarea" name="comment" onChange={onChangeText} value={commentDetails.comment}></textarea>
                               <button className="mn-comment-btn" onClick={commentDetails.comment.trim() === "" ? null :onComment} disabled={commentDetails.comment.trim() === "" ? true : false}>Post Comment…</button>
                               <ul className="mn-comment-list">
                                   {
                                       (commentList || []).map((x, i) => {
                                           return(
                                               <li className="row row10" key={i}>
                                                   <div className="col col-auto">
                                                       <div className="mn-cm-avtar">
                                                           <span>{x && x.name && x.name.substring(1, 0)}</span>
                                                       </div>
                                                   </div>
                                                   <div className="col">
                                                       <div className="d-flex flex-wrap align-items-center">
                                                           <h4 className="mb-0 mt-0">{x.name}</h4>
                                                           <span className="mn-cm-time-ago">{moment(x.create_date).format('LL')}</span>
                                                       </div>
                                                       <p>{x.comment}</p>
                                                   </div>
                                               </li>
                                           )
                                       })
                                   }


                               </ul>

                           </div>
                       </div>
                       <Footer/>
                   </React.Fragment> :
                    <div>
                        <div className="comments">

                            <h2>Leave a comment</h2>

                            <form className="comments__form">
                                <div className="comments__form-info">
                                    <div className="comments__form-field">
                                        <input id="comments__form-label-name" name="name" onChange={onChangeText} value={commentDetails.name} placeholder="Name"
                                               type="text" className="comments__form-input"/>
                                            <label className="comments__form-label" htmlFor="comments__form-label-name">
                                                <span className="comments__form-label-text">Name</span>
                                            </label>

                                    </div>
                                    <span className="error">{formError.name}</span>
                                    <div className="comments__form-field">
                                        <input id="comments__form-label-mail"  name="email" onChange={onChangeText} value={commentDetails.email} placeholder="E-mail"
                                               type="text" className="comments__form-input"/>
                                            <label className="comments__form-label" htmlFor="comments__form-label-mail">
                                                <span className="comments__form-label-text">E-mail</span>
                                            </label>

                                    </div>
                                    <span className="error">{formError.email}</span>
                                    <div className="comments__form-field">
                                        <input id="comments__form-label-site"  placeholder="Website"
                                               name="web_url" onChange={onChangeText} value={commentDetails.web_url}
                                               type="text" className="comments__form-input"/>
                                            <label className="comments__form-label" htmlFor="comments__form-label-site">
                                                <span className="comments__form-label-text">Website</span>
                                            </label>
                                    </div>
                                </div>
                                <input name="submit" type="button" onClick={onAddComment} id="submit" className="comments__form-submit"
                                       value="Post Comment"/>
                            </form>
                        </div>
                    </div>
            }

        </div>
    )
}
export default StoriesDetils
